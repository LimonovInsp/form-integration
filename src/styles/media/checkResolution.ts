import {useEffect, useState} from "react";
import {Query, QueryResponse} from "./types";

const CheckResolution = (queries: Query) => {
  const [queryMatch, setQueryMatch] = useState<QueryResponse | null>(null);

  useEffect(() => {
    const mediaQueryLists = {} as any;
    const keys = Object.keys(queries);

    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc: QueryResponse, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {})
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {} as QueryResponse;
      keys.forEach(media => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches
        } else {
          matches[media] = false
        }
      });

      setQueryMatch(matches);
      isAttached = true;
      keys.forEach(media => {
        if(typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {

      if(isAttached) {
        keys.forEach(media => {
          if(typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    }
  }, [queries]);

  return queryMatch;
}

export default CheckResolution;
