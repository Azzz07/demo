using MS as service from '../../srv/service';

annotate service.myview with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'customerName',
            Value : customerName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'PoNumber',
            Value : PoNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'customerNumber',
            Value : customerNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'orderDate',
            Value : orderDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'soNumber',
            Value : soNumber,
        },
    ]
);
annotate service.myview with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'customerName',
                Value : customerName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PoNumber',
                Value : PoNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'customerNumber',
                Value : customerNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'orderDate',
                Value : orderDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'soNumber',
                Value : soNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'inquiryNumber',
                Value : inquiryNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'totalOrderItems',
                Value : totalOrderItems,
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
