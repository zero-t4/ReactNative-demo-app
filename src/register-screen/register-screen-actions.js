export const loginAction = ({
  params,
}: {
  login: string,
  password: string,
}) => {
  fetch('https://terminal.proprli.com/api/web-login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
    })
    .catch(e => console.warn(e.message));
  // TODO 17-Oct-18 [NZ]: Save token & navigate
  return true;
};

export const registerAction = async ({
  params,
}: {
  email: string,
  first_name: string,
  password: string,
  surname: string,
}) => {
  const rawResponse = await fetch(
    'https://terminal.proprli.com/api/web-login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  );
  const content = await rawResponse.json();
  // TODO 17-Oct-18 [NZ]: Save token & navigate
};
