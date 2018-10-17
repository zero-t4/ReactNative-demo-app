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
