import { type ReactNode } from "react";

export interface PaginationProps {
  plannerWeek: string[];
  updatePlannerWeek: ({
    dateWithTimezone,
    setPlannerWeek,
  }: UpdatePlannerWeekProps) => void;

  setPlannerWeek: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface UpdatePlannerWeekProps {
  dateWithTimezone: Date;
  setPlannerWeek: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface PriorityProps {
  priority: string;
  date: string;
  status: string;
  children: ReactNode;
  id: number;
  onDelete: ({ id, setPriorities }: onDeleteProps) => void;
  setPriorities: React.Dispatch<React.SetStateAction<PriorityProps[]>>;
}

export interface NewPriorityProps {
  onAddPriority: ({
    priority,
    description,
    date,
    status,
    setPriorities,
  }: AddPriorityProps) => void;
  setPriorities: React.Dispatch<React.SetStateAction<PriorityProps[]>>;
}

export interface onDeleteProps {
  id: number;
  setPriorities: React.Dispatch<React.SetStateAction<PriorityProps[]>>;
}

export interface AddPriorityProps {
  priority: string;
  description: string;
  date: string;
  status: string;
  setPriorities: React.Dispatch<React.SetStateAction<PriorityProps[]>>;
}

export interface ToggleStatusProps {
  id: number;
  setPriorities: React.Dispatch<React.SetStateAction<PriorityProps[]>>;
}
export interface PlannerProps {
  priorities: PriorityProps[];
  plannerWeek: string[];
  onDelete: ({ id, setPriorities }: onDeleteProps) => void;
  setPriorities: React.Dispatch<React.SetStateAction<PriorityProps[]>>;
}

export interface DownloadButtonProps {
  weeklyPlannerHTML: React.RefObject<HTMLDivElement>;
}
