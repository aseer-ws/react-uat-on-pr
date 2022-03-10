export async function redirect() {
  let pathname = window.location.pathname;

  if (['', '/', '/index.html'].includes(pathname)) {
    return;
  }

  pathname = pathname.replace('/index.html', '');

  const pathnames = pathname.split('/').filter(val => val !== '');
  let loopCount = pathnames.length - 1;

  for (let k = loopCount; k > 0; k--) {
    let updatedPathname = '';
    for (let i = 0; i < k; i++) {
      updatedPathname += `/${pathnames[i]}`;
    }

    let updatedUrl = window.location.origin + updatedPathname;

    const res = await fetch(updatedUrl);

    if (res.ok) {
      window.location.assign(updatedUrl + '/index.html' + `?redirect_uri=${pathname.replace(updatedPathname, '')}`);
      return;
    }
  }

  window.location.assign(window.location.origin + '/index.html');
}

redirect();
