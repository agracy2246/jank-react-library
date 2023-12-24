# *jank-react-library*

## Typical Development Workflow

If you want to develop UI components, these are the typical steps one would take. We'll demonstrate how to create a `Button` component in the follow examples.

1. Under `src` create a folder for the component you want to create. For this example, we'll call it `Button`.
2. In this new folder (`src/Button`), create the following files:
    * `<Name of Component>.tsx` (`Button.tsx`)
    * `<Name of Component>.css` (`Button.css`)
    * `<Name of Component>.stories.ts` (`Button.stories.ts`)
    * `index.ts`

    When developing `.tsx` components, one should generally follow certain guidelines for this library:

    * Use the `data` attribute, when it makes sense, to target and style components. Take the following button for example: `return <button data-button={`kind:${kind}`} ref={ref} {...props} />`. Here we can see that we can pass the kind of button we want. As a further example, one value may be `primary`. The HTML for this element turns out to be something like `<button data-button="kind:primary"></button>`.
    * When styling `.tsx` components the rule is One Component, One CSS File.
    * We can target `data` attributes in our CSS files like so: 
        `[data-button~="kind:primary"] { background-color: red;  color: #ffffff; }`

        Here we  have targeted the `data` attribute we added in the previous example. We can also use this same technique to target all of our components, no matter what the value of the `data` attribute is.
        `[data-button] { background-color: red;  color: #ffffff; }`

    `index.ts` - Every component must have one of these files. Inside of this file, we must export our component. For example: `export * from "./Button";`

3. The final step in development is creating an index.ts in `src`. This file will aggregate all of our components for exporting. For example: `export * from "./Card";
export * from "./Button";`

Now that we have developed a new component, we need to make it available to import as an `npm` package.

1. Update the version in `package.json`. Failure to do this will cause errors in building the new package.
2. Commit with a helpful message and push to Github.
3. Create a new release, with a new tag.
   Currently the repo is hosted and built on Github using Actions. When a new release is created, an `npm` package will be built and placed in the repository.
4. The newest components are now ready for use.

## Typical Usage Workflow

1. Install the package into your project. For example: `npm install @agracy2246/react-library@0.0.1` or `"@agracy2246/react-library": "0.0.1"`.
2. Import the CSS file to your root component. For example: `import '@agracy2246/react-library/dist/style.css'`.
3. You can now import components for use. For example: `import  { Button, Card }  from '@agracy2246/react-library';`