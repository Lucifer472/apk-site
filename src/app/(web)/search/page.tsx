const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;

  console.log(q);

  return <div>Search Page</div>;
};

export default SearchPage;
