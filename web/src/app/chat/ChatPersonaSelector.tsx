import { Persona } from "@/app/admin/personas/interfaces";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { CustomDropdown } from "@/components/Dropdown";

function PersonaItem({
  id,
  name,
  onSelect,
  isSelected,
}: {
  id: number;
  name: string;
  onSelect: (personaId: number) => void;
  isSelected: boolean;
}) {
  return (
    <div
      key={id}
      className={`
    flex
    px-3 
    text-sm 
    py-2 
    my-0.5
    rounded
    mx-1
    select-none 
    cursor-pointer 
    text-emphasis
    bg-background
    hover:bg-hover
  `}
      onClick={() => {
        onSelect(id);
      }}
    >
      {name}
      {isSelected && (
        <div className="ml-auto mr-1">
          <FiCheck />
        </div>
      )}
    </div>
  );
}

export function ChatPersonaSelector({
  personas,
  selectedPersonaId,
  onPersonaChange,
}: {
  personas: Persona[];
  selectedPersonaId: number | null;
  onPersonaChange: (persona: Persona | null) => void;
}) {
  const currentlySelectedPersona = personas.find(
    (persona) => persona.id === selectedPersonaId
  );

  return (
    <CustomDropdown
      dropdown={
        <div
          className={`
            border 
            border-border 
            bg-background
            rounded-lg 
            flex 
            flex-col 
            w-64 
            max-h-96 
            overflow-y-auto 
            flex
            overscroll-contain`}
        >
          {personas.map((persona, ind) => {
            const isSelected = persona.id === selectedPersonaId;
            return (
              <PersonaItem
                key={persona.id}
                id={persona.id}
                name={persona.name}
                onSelect={(clickedPersonaId) => {
                  const clickedPersona = personas.find(
                    (persona) => persona.id === clickedPersonaId
                  );
                  if (clickedPersona) {
                    onPersonaChange(clickedPersona);
                  }
                }}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      }
    >
      <div className="select-none text-xl font-bold flex px-2 py-1.5 text-strong rounded cursor-pointer hover:bg-hover-light">
        <div className="my-auto">
          {currentlySelectedPersona?.name || "Default"}
        </div>
        <FiChevronDown className="my-auto ml-1" />
      </div>
    </CustomDropdown>
  );
}
