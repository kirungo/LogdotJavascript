const measureKelvin = function () {
  const measurement = {
    value: 10,
    type: `temp`,
    unit: `celsius`,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
