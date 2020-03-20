interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

// 定义一个操作mysql数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类

export class MySqlDb<T> implements DBI<T>{

    constructor(){
        console.log('mysql建立连接')
    }
    add(info: T): boolean {
        console.log(info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        console.log('查询ID:',id)
        var list = [
            {name:'jack',sex:'man'},
            {name:'Tony',sex:'man'},
            {name:'Lily',sex:'woman'},
            {name:'Mark',sex:'man'},
        ]
        return list;
    }

}

// 定义一个操作mssql数据库的类

export class MsSql<T> implements DBI<T>{

    constructor(){
        console.log('mssql建立连接')
    }
    add(info: T): boolean {
       console.log(info);
       return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        console.log('查询ID:',id)
        var list = [
            {name:'jack',sex:'man'},
            {name:'Tony',sex:'man'},
            {name:'Lily',sex:'woman'},
            {name:'Mark',sex:'man'},
        ]
        return list;
    }

}