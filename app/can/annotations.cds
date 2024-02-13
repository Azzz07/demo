using MS as service from '../../srv/service';

annotate service.LiabilityBasedOnAmount_1 with {
    id @Common.SemanticObject : 'obj'
};
annotate service.LiabilityBasedOnAmount_1 with {
    id @Common.SemanticObjectMapping : [
        {
            $Type : 'Common.SemanticObjectMappingType',
            LocalProperty : id,
            SemanticObjectProperty : 'display',
        },
    ]
};
