import { createSelector } from 'reselect';

const selectModels = (state) => state.models;

export const selectFaces = createSelector([selectModels], (models) =>
  models.response.faces ? models.response.faces : null
);
export const selectColors = createSelector([selectModels], (models) =>
  models.response.colors ? models.response.colors : null
);

export const selectConcepts = createSelector([selectModels], (models) => {
  if (models.response.concepts) {
    const concepts = models.response.concepts.filter(
      (concept) => concept.data.concepts[0].value > 0.7
    );
    if (concepts.length === 0) {
      return null;
    }
    return concepts;
  }
});

export const selectIsLoading = createSelector(
  [selectModels],
  (models) => models.isLoading
);
