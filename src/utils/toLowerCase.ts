export default function toLowserCase(value: any) {
  if (typeof value === 'string') {
    let newValue = value;
    return newValue.toLowerCase();
  }
  return value.toString();
}
