




export const getRoutes = (section) => {
  switch(section) {
    case 'problems':
      return '/problems';
    case 'home':
      return '/';
    case 'profile':
      return '/profile/@me';
    case 'myProblems':
      return '/my-problems/all';
    case 'mySprints':
      return '/my-sprints';
    case 'submissions':
      return '/profile/my-submissions';
    case 'account':
      return '/profile/account';
    case 'logout':
      return '/logout';
    default:
      return '/';
  }
}