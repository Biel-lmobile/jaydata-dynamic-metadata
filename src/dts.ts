export class JayData {
    static src: string = "declare global {\n namespace $data{\n    class Geography{}\n    class GeographyLineString{}\n    class GeographyPolygon{}\n    class GeographyMultiPoint{}\n    class GeographyMultiPolygon{}\n    class GeographyMultiLineString{}\n    class GeographyCollection{}\n\n    class Geometry{}\n    class GeometryLineString{}\n    class GeometryPolygon{}\n    class GeometryMultiPoint{}\n    class GeometryMultiPolygon{}\n    class GeometryMultiLineString{}\n    class GeometryCollection{}\n\n    const enum EntityState{\n        Detached = 0,\n        Unchanged = 10,\n        Added = 20,\n        Modified = 30,\n        Deleted = 40\n    }\n\n    interface MemberDefinition{\n        name: string;\n        type: any;\n        dataType: any;\n        elementType: any;\n        originalType: any;\n        kind: string;\n        classMember: boolean;\n        set: (value:any) => void;\n        get: () => any;\n        value: any;\n        initialValue: any;\n        method: Function;\n        enumerable: boolean;\n        configurable: boolean;\n        key: boolean;\n        computed: boolean;\n        storeOnObject: boolean;\n        monitorChanges: boolean;\n    }\n\n    interface Event{\n        attach(eventHandler: (sender: any, event: any) => void ): void;\n        detach(eventHandler: () => void ): void;\n        fire(e: any, sender: any): void;\n    }\n\n    class Base<T>{\n        constructor();\n        getType: () => typeof Base;\n\n        static addProperty(name:string, getterOrType:string | Function, setterOrGetter?:Function, setter?:Function): void;\n        static addMember(name:string, definition:any, isClassMember?:boolean): void;\n        static describeField(name:string, definition:any): void;\n\n        static hasMetadata(key:string, property?:string): boolean;\n        static getAllMetadata(property?:string): any;\n        static getMetadata(key:string, property?:string): any;\n        static setMetadata(key:string, value:any, property?:string): void;\n    }\n\n    class Enum extends Base<Enum>{\n        static extend(name:string, instanceDefinition:any, classDefinition?:any): Base<Enum>;\n    }\n    function createEnum(name:string, enumType:any, enumDefinition?:any): Base<Enum>;\n\n    class Entity extends Base<Entity>{\n        static extend(name:string, instanceDefinition:any, classDefinition?:any): Base<Entity>;\n\n        asKoObservable: any;\n entityState: EntityState;\n        changedProperties: MemberDefinition[];\n\n        propertyChanging: Event;\n        propertyChanged: Event;\n        propertyValidationError: Event;\n        isValid: boolean;\n    }\n\n    class EntitySet<Ttype extends typeof Entity, T extends Entity> extends Queryable<T>{\n        add(item: T): T;\n        add(initData: {}): T;\n        attach(item: T): void;\n        attach(item: {}): void;\n        attachOrGet(item: T): T;\n        attachOrGet(item: {}): T;\n        detach(item: T): void;\n        detach(item: {}): void;\n        remove(item: T): void;\n        remove(item: {}): void;\n        elementType: Ttype;\n    }\n\n    class EntityContext extends Base<EntityContext>{\n        constructor(config?: any);\n        onReady(): Promise<EntityContext>;\n        saveChanges(): Promise<number>;\n        stateManager: {reset: Function};\n        static extend(name:string, instanceDefinition:any, classDefinition?:any): Base<EntityContext>;\n    }\n\n    class Queryable<T extends Entity | Edm.Primitive>{\n        filter(predicate: (it: T) => boolean, thisArg?: any): Queryable<T>;\n        filter(predicate: string, thisArg?: any): Queryable<T>;\n        map(projection: (it: T) => any): Queryable<any>;\n        map(projection: string): Queryable<any>;\n        orderBy(predicate: (it: T) => void): Queryable<T>;\n        orderBy(predicate: string): Queryable<T>;\n        orderByDescending(predicate: (it: T) => void): Queryable<T>;\n        orderByDescending(predicate: string): Queryable<T>;\n        include(selector: string): Queryable<T>;\n   include2(selector: string): Queryable<T>;\n  find(id: string): Promise<T>;\n       skip(amount: number): Queryable<T>;\n        take(amount: number): Queryable<T>;\n        forEach(handler: (it: T) => void): Promise<T>;\n        length(): Promise<number>;\n        toArray(): Promise<T[]>;\n        single(predicate: (it: T) => boolean, params?: any): Promise<T>;\n        single(predicate: string, params?: any): Promise<T>;\n  select(projection: (it: T) => any): Queryable<any>;\n  select(projection: string): Queryable<any>;\n first(predicate?: (it: T) => boolean, params?: any): Promise<T>;\n        first(predicate?: string, params?: any): Promise<T>;\n        removeAll(): Promise<number>;\n        count(): Promise<number>;\n    }\n    class ServiceAction{}\n    class ServiceFunction{}\n\n    function implementation(name:string): typeof Base;\n}\n\nnamespace Edm {\n    type Boolean = boolean;\n    type Binary = Uint8Array;\n    type DateTime = JSDate;\n    type DateTimeOffset = JSDate;\n    type Duration = string;\n    type TimeOfDay = string;\n    type Date = string;\n    type Time = string;\n    type Decimal = string;\n    type Single = number;\n    type Float = number;\n    type Double = number;\n    type Guid = string;\n    type Int16 = number;\n    type Int32 = number;\n    type Int64 = string;\n    type Byte = number;\n    type SByte = number;\n    type String = string;\n    type GeographyPoint = $data.Geography;\n    type GeographyLineString = $data.GeographyLineString;\n    type GeographyPolygon = $data.GeographyPolygon;\n    type GeographyMultiPoint = $data.GeographyMultiPoint;\n    type GeographyMultiPolygon = $data.GeographyMultiPolygon;\n    type GeographyMultiLineString = $data.GeographyMultiLineString;\n    type GeographyCollection = $data.GeographyCollection;\n    type GeometryPoint = $data.Geometry;\n    type GeometryLineString = $data.GeometryLineString;\n    type GeometryPolygon = $data.GeometryPolygon;\n    type GeometryMultiPoint = $data.GeometryMultiPoint;\n    type GeometryMultiPolygon = $data.GeometryMultiPolygon;\n    type GeometryMultiLineString = $data.GeometryMultiLineString;\n    type GeometryCollection = $data.GeometryCollection;\n    type Primitive =\n        Boolean | Binary | Guid | DateTime | DateTimeOffset | Duration | TimeOfDay | Date | Time |\n        Decimal | Single | Float | Double | Int16 | Int32 | Int64 | Byte | SByte | String |\n        GeographyPoint | GeographyLineString | GeographyPolygon | GeographyMultiPoint | GeographyMultiLineString | GeographyMultiPolygon | GeographyCollection |\n        GeometryPoint | GeometryLineString | GeometryPolygon | GeometryMultiPoint | GeometryMultiLineString | GeometryMultiPolygon | GeometryCollection;\n}\n";
}