import ast

class GeneralNode:
    def __str__(self):
        return self.__repr__()

class FunctionNode(GeneralNode):
    def __init__(self, name, parameters, body):
        self.name = name
        self.parameters = parameters
        self.body = body
    
    def __repr__(self):
        return f"FunctionNode(name={self.name}, parameters={self.parameters}, body={self.body})"

class ReturnNode(GeneralNode):
    def __init__(self, value):
        self.value = value
    
    def __repr__(self):
        return f"ReturnNode(value={self.value})"

class MyNodeVisitor(ast.NodeVisitor):
    def visit_Module(self, node):
        return [self.visit(n) for n in node.body]

    def visit_FunctionDef(self, node):
        name = node.name
        parameters = [arg.arg for arg in node.args.args]
        body = [self.visit(n) for n in node.body]
        return FunctionNode(name, parameters, body)

    def visit_Return(self, node):
        return ReturnNode(self.visit(node.value))

    def visit_Name(self, node):
        return node.id

    def visit_BinOp(self, node):
        left = self.visit(node.left)
        op = type(node.op).__name__
        right = self.visit(node.right)
        return f"{left} {op} {right}"

    # ... Implement other visit_ methods for different node types

def generate_gst(source_code):
    python_ast = ast.parse(source_code)
    visitor = MyNodeVisitor()
    return visitor.visit(python_ast)

# Example usage
source_code = """
def square(x):
    x = 1
    if (x == 1):
        return x * x
        
def add(x, y):
    return x + y
"""
parsed = ast.parse(source_code)
print(ast.dump(parsed, indent=4))

gst = generate_gst(source_code)
print(gst)
