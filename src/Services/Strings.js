import LocalizedStrings from 'react-localization';
// all the live string output representation
const Strings = new LocalizedStrings({
  en: {
    bandsInTown: 'Bands In Town',
    dateFromMustBeBeforeDateTo: '(From) date must be before (To) date',
    facebook: 'Facebook',
    filterEventsByDate: 'Filter events by date',
    from: 'From',
    homePlaceholderMessage: `There's nothing to see here, keep moving...`,
    location: 'Location',
    navHeadline: 'Live Tonight',
    noResultsFound: 'No results found',
    search: 'Search',
    searchEvents: 'Search events',
    searchPlaceholderMessage: `Enter an artist name, filter by dates, and let's see what BandsInTown API has for you...`,
    searchByArtistName: 'Search by artist name...',
    to: 'To',
    visitEventPage: 'Visit Event Page',
  },
});

// fetching lang key dynamically
Strings.setLanguage('en');

export default Strings;
