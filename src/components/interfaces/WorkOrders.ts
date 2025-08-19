export interface IWorkOrder {
  workOrder: number;
  plate: string;
  clientName: string;
  model: string;
  entryDate: Date;
  deliveryDate: Date;
  description: string;
  budget: number;
  paidValue: number;
  mechanic: string;
}