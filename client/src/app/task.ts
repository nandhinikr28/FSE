export class tasks{
    _id: string;
    Task_ID:string;
    Start_date: Date;
    End_date: Date;
    Priority: number =0 ;
    Finished:boolean;
    Parent_Task:string;
    constructor(){}
}