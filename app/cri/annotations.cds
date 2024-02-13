using MS as service from '../../srv/service';

annotate service.Criticality with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cVal',
            Value : cVal,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cSTring',
            Value : cSTring,
            Criticality : cVal,
            CriticalityRepresentation : #WithIcon,
        },
    ]
);
annotate service.Criticality with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cVal',
                Value : cVal,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cSTring',
                Value : cSTring,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
