export default function convertKeyToReadableString(key: string) {
  return (
    key.charAt(0).toUpperCase() +
    key
      .slice(1)
      .split('_')
      .join(' ')
  );
}
