export class Task{
    id: any;
    task_assigned_to: String;
    task_status : String;
    task_dueDate: any;
    task_priority: String;
    task_desc : String;

    constructor(id:any,task_assigned_to:String,task_status:String,task_dueDate:String,task_priority:String,task_desc:String){
        this.id = '';
        this.task_assigned_to = '';
        this.task_status = '';
        this.task_dueDate = '';
        this.task_priority = '';
        this.task_desc = '';
        
    }
}
