export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
export const gotError = state => state.contacts.error;

export const getFilteredContacts = state => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  const normilizedFilter = filter.toLowerCase();

  return allContacts.filter(record =>
    record.name.toLowerCase().includes(normilizedFilter),
  );
};
