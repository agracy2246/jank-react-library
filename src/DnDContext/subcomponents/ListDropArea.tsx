import { Droppable, Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { Item, DroppableId } from '../types/ListTypes';
import { TimeBar } from '../../TimeBar';
const grid = 8;

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    background: isDraggingOver ? 'transparent' : 'transparent',
    padding: `${grid}`,
    width: 250,
    backgroundColor: 'transparent',
    transition: 'none'

});
const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined): React.CSSProperties => {
    console.log(draggableStyle)
    return {
        userSelect: 'none',
        padding: `5`,
        margin: `8px 0 ${grid}px 0`,
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : '#0e71e3',
        // styles we need to apply on draggables
        ...draggableStyle
    }
};

const ListDropArea = ({ activeList, droppableId, progress }: {activeList: Item[], droppableId: DroppableId, progress: number}) => {
    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {activeList.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}>
                                    {/* {item.content} */}
                                    <TimeBar progress={progress} active id={item.content}/>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default ListDropArea;