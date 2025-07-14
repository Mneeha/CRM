import useDataStore from "../zustand/useDataStore";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
const stages = ["new","contacted","proposal","won"];
const Lead = () => {
  const {leads,setLeads} =useDataStore(); 
  const groupedLeads =stages.reduce((acc, stage) => {
    acc[stage] = leads.filter((lead) => lead.stage===stage);
    return acc;
  }, {});
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (
      source.droppableId===destination.droppableId &&
      source.index===destination.index
    ) return;
    const draggedLead =leads.find((lead) => lead.id=== draggableId);
    const updatedLeads =leads.map((lead) =>
      lead.id ===draggedLead.id
        ? { ...lead, stage: destination.droppableId }
        : lead
    );
    setLeads(updatedLeads);
  };
  return (
    <div className="l_page">
      <div className="bg">
    <img src="/img8.png" alt="bg" className="bgimg" />
    </div>
      <h1 className="l_title">Leads Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {stages.map((stage) => (
            <Droppable droppableId={stage} key={stage}>
              {(provided) => (
                <div
                  className="kanban-column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  <h3 className="kanban-heading">{stage.toUpperCase()}</h3>
                  <div className="kanban-cards">
                    {groupedLeads[stage].map((lead, index) => (
                      <Draggable
                        key={lead.id}
                        draggableId={lead.id}
                        index={index} >
                        {(provided) => (
                  <div
                    className="kanban-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} >
                    <h5>{lead.name}</h5>
                    <p>{lead.company}</p></div>
                    )}
                    </Draggable>
                    ))}
                    {provided.placeholder}
               </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );};

export default Lead;
