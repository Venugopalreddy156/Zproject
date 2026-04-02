using training as db from '../db/data-model';

@path: 'MyService'
service CatalogService {
    @odata.draft.enabled
    entity trainers  as projection on db.trainer;

}
