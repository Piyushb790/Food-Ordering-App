export function filterData(searchInput, filteredRes) {
  const searchedFilterData = filteredRes.filter((restro) =>
    restro?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return searchedFilterData;
}

export function validate(email, password) {
  // const isFullName = /[A-Za-z]+$/.test(fullName);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not valid";
  // if (!isFullName) return "Name is not valid";

  return null;
}
