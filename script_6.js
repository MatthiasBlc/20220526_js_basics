
const serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
const proline = ["CCU", "CCC", "CCA", "CCG"]
const leucine = ["UUA", "UUG"];
const phenylalanine = ["UUU", "UUC"];
const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
const tyrosine = ["UAU", "UAC"];


function translate(arn) {
  prot1 = arn.slice(0, 3);
  if (serine.includes(prot1)) {
    prot1Name = "serine";
  } else if (proline.includes(prot1)) {
    prot1Name = "proline";
  } else if (phenylalanine.includes(prot1)) {
    prot1Name = "phenylalanine";
  } else if (arginine.includes(prot1)) {
    prot1Name = "arginine";
  } else if (tyrosine.includes(prot1)) {
    prot1Name = "tyrosine";
  } else if (leucine.includes(prot1)) {
    prot1Name = "leucine";
  } else {
    prot1Name = "unknown";
  }

  prot2 = arn.slice(3, 6);
  if (serine.includes(prot2)) {
    prot2Name = "serine";
  } else if (proline.includes(prot2)) {
    prot2Name = "proline";
  } else if (phenylalanine.includes(prot2)) {
    prot2Name = "phenylalanine";
  } else if (arginine.includes(prot2)) {
    prot2Name = "arginine";
  } else if (tyrosine.includes(prot2)) {
    prot2Name = "tyrosine";
  } else if (leucine.includes(prot2)) {
    prot2Name = "leucine";
  } else {
    prot2Name = "unknown";
  }
  prot3 = arn.slice(6, 9);
  if (serine.includes(prot3)) {
    prot3Name = "serine";
  } else if (proline.includes(prot3)) {
    prot3Name = "proline";
  } else if (phenylalanine.includes(prot3)) {
    prot3Name = "phenylalanine";
  } else if (arginine.includes(prot3)) {
    prot3Name = "arginine";
  } else if (tyrosine.includes(prot3)) {
    prot3Name = "tyrosine";
  } else if (leucine.includes(prot3)) {
    prot3Name = "leucine";
  } else {
    prot3Name = "unknown";
  }
  prot4 = arn.slice(9, 12);
  if (serine.includes(prot4)) {
    prot4Name = "serine";
  } else if (proline.includes(prot4)) {
    prot4Name = "proline";
  } else if (phenylalanine.includes(prot4)) {
    prot4Name = "phenylalanine";
  } else if (arginine.includes(prot4)) {
    prot4Name = "arginine";
  } else if (tyrosine.includes(prot4)) {
    prot4Name = "tyrosine";
  } else if (leucine.includes(prot4)) {
    prot4Name = "leucine";
  } else {
    prot4Name = "unknown";
  }
  prot5 = arn.slice(12, 15);
  if (serine.includes(prot5)) {
    prot5Name = "serine";
  } else if (proline.includes(prot5)) {
    prot5Name = "proline";
  } else if (phenylalanine.includes(prot5)) {
    prot5Name = "phenylalanine";
  } else if (arginine.includes(prot5)) {
    prot5Name = "arginine";
  } else if (tyrosine.includes(prot5)) {
    prot5Name = "tyrosine";
  } else if (leucine.includes(prot5)) {
    prot5Name = "leucine";
  } else {
    prot5Name = "unknown";
  }
  prot6 = arn.slice(15, 18);
  if (serine.includes(prot6)) {
    prot6Name = "serine";
  } else if (proline.includes(prot6)) {
    prot6Name = "proline";
  } else if (phenylalanine.includes(prot6)) {
    prot6Name = "phenylalanine";
  } else if (arginine.includes(prot6)) {
    prot6Name = "arginine";
  } else if (tyrosine.includes(prot6)) {
    prot6Name = "tyrosine";
  } else if (leucine.includes(prot6)) {
    prot6Name = "leucine";
  } else {
    prot6Name = "unknown";
  }

  // console.log(prot1);
  // console.log(prot2);
  // console.log(prot3);
  // console.log(prot4);
  // console.log(prot5);
  // console.log(prot6);

  arntranslate = prot1Name + " - " + prot2Name + " - " + prot3Name + " - " + prot4Name + " - " + prot5Name + " - " + prot6Name;

  return arntranslate
}
console.log("CCGUCGUUGCGCUACAGC")
console.log(translate("CCGUCGUUGCGCUACAGC"))
console.log("CCUCGCCGGUACUUCUCG")
console.log(translate("CCUCGCCGGUACUUCUCG"))

