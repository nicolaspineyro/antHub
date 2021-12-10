import {Colors} from 'components/ui';

const ANTS_QUERY = `
{
   ants {
      name
      length
      weight
      color
   }
}
`;

const ENDPOINT = 'https://guarded-shore-81814.herokuapp.com/graphql';

export const getAnts = async () => {
  const antContent = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({query: ANTS_QUERY}),
  })
    .then(response => response.json())
    .then(data => data.data);
  return antContent;
};

export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return callback => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export const LinearGradientProps = {
  colors: [Colors.linearBlue, Colors.linerLightBlue],
  style: {flex: 1},
};
