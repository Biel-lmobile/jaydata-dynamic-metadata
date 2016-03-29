/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />
export declare class Annotations {
    private includes;
    private annotations;
    addInclude(include: any): void;
    processEntityPropertyAnnotations(typeName: any, property: any, annotations: any, isStatic?: boolean): void;
    processEntityAnnotations(typeName: any, annotations: any, isStatic?: boolean): void;
    processEntitySetAnnotations(typeName: any, annotations: any, isStatic?: boolean): void;
    processSchemaAnnotations(target: any, annotations: any, qualifier: any, isStatic?: boolean): void;
    preProcessAnnotation(typeDef: any): void;
    processedAnnotations: Object;
    addAnnotation(type: any): void;
    annotationsText(): string;
    resolveAnnotationTypeAlias(term: any): any;
    valueUnknown(a: any): any;
    valueBinary(a: any): any;
    valueBool(a: any): any;
    valueDate(a: any): any;
    valueDateTimeOffset(a: any): any;
    valueDecimal(a: any): any;
    valueDuration(a: any): any;
    valueEnumMember(a: any): any;
    valueFloat(a: any): any;
    valueGuid(a: any): any;
    valueInt(a: any): any;
    valueString(a: any): any;
    valueTimeOfDay(a: any): any;
    valuePropertyPath(a: any): any;
    valueNavigationPropertyPath(a: any): any;
    valueAnnotationPath(a: any): any;
    valueNull(a: any): any;
}
