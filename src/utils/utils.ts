export function hashCode(str: string) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export const getPublicUrl = (path: string) => {
  return `${process.env.PUBLIC_URL}${path}`;
};

function editDistance(s1: string, s2: string) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

export function similarity(s1: string, s2: string) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / longerLength;
}

export const formatSeconds = (total: number) => {
  const hours = Math.floor(total / (60 * 60));
  const remainingSeconds = total % (60 * 60);
  const minute = Math.floor(remainingSeconds / 60);
  const seconds = Math.floor(remainingSeconds % 60);

  const result: number[] = [];
  if (hours > 0) {
    result.push(hours);
  }
  result.push(minute, seconds);
  return result.map((t) => t.toString().padStart(2, "0")).join(":");
};

const hindiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export const digitsToHindi = (number?: string): string => {
  return (
    number?.replace(/[0-9]/g, function (w) {
      return hindiDigits[+w];
    }) ?? ""
  );
};

export const phoneValidate = (value: string, zeroOptional = true): boolean => {
  const v =
    zeroOptional && !(value.startsWith("0") || value.startsWith("۰"))
      ? "0" + value
      : value;
  return Boolean(v.match(/^[0۰][0-9۰-۹]{10}$/g));
};

export const handleChangeTheme = () => {
  document.documentElement.style.setProperty(
    "--color-neutrals-n-10",
    "#1A1B1C"
  );
  document.documentElement.style.setProperty(
    "--color-neutrals-n-20",
    "#1F1F21"
  );
  document.documentElement.style.setProperty(
    "--color-neutrals-n-400",
    "#BDC2C9"
  );
  document.documentElement.style.setProperty(
    "--color-neutrals-n-500",
    "#DFE1E5"
  );
  document.documentElement.style.setProperty(
    "--color-bubble-out-primary",
    "#005C56"
  );
  document.documentElement.style.setProperty("--background", "#0B0E14");
  document.documentElement.style.setProperty("--wallpaper", "#111212");
  document.documentElement.style.setProperty("--border", "#2c2c2c");
  document.documentElement.style.setProperty("--scroll", "#ffffff33");
};
