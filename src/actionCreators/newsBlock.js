//@flow

export function fetchNewsViaSaga(country: string) {
    return {
        type: 'NEWS_FETCH_REQUESTED',
        payload: {country}
    };
}

export function fetchNewsViaEpic(country: string) {
    return {
        type: 'EPIC_NEWS_FETCH_REQUESTED',
        payload: {country}
    };
}