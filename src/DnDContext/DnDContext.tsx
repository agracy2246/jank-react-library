import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { getItems, reorder } from './utilities/util';
import ListDropArea from './subcomponents/ListDropArea';
import {DroppableId} from './types/ListTypes'
import { ThemeProp } from "../types/CommonProps";
import './DnDContext.scss';
type Item = {
    id: string;
    content: string;
}
type DroppableInfo = {
    index: number;
    droppableId: string;
};

type MoveResult = {
    active: Item[];
    inactive: Item[];
}

/**
 * Moves an item from one list to another list.
 */
const move = (
    source: Item[],
    destination: Item[],
    droppableSource: DroppableInfo,
    droppableDestination: DroppableInfo
): MoveResult => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    
    const result: MoveResult = {
        active: [],
        inactive: []
    };

    result[droppableSource.droppableId as keyof MoveResult] = sourceClone;
    result[droppableDestination.droppableId as keyof MoveResult] = destClone;
    return result;
};

export interface DnDContextProps extends ThemeProp {
}

const DnDContext = ({theme}: DnDContextProps): React.Component => {

    const [activeList, setActiveList] = useState<Item[]>(getItems(5, 0));
    const [inactiveList, setInactiveList] = useState<Item[]>(getItems(5, 5));

    const id2List = {
        active: activeList,
        inactive: inactiveList
    }

    const onDragEnd = (result:any) => {
        const getList = (id: DroppableId): Item[] => id2List[id];

        const { source, destination } = result;
        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                source.droppableId === 'active' ? activeList : inactiveList,
                source.index,
                destination.index
            );

            if (source.droppableId === 'inactive') {
                setInactiveList(items);
            } else if (source.droppableId === 'active') {
                setActiveList(items);
            }

        } else {
            const result: MoveResult = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );
            setActiveList(result.active);
            setInactiveList(result.inactive);
        }
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{display: 'flex' ,flexDirection: 'row', gap: '10px'}}>
                    <ListDropArea activeList={activeList} droppableId={'active'}/>
                    <ListDropArea activeList={inactiveList} droppableId={'inactive'}/>
                </div>
            </DragDropContext>
        </>
    );
};

export default DnDContext;
