import { QuickPickItemKind, type QuickPickItem } from "vscode";

// export const PERMUTATION_TABLE: Uint8Array = Uint8Array.from({ length: 256 }, (_, i) => i);
export const PERMUTATION_TABLE: Uint8Array = Uint8Array.from([
  234, 9, 103, 60, 5, 79, 232, 229, 45, 51, 131, 3, 168, 29, 170, 216, 99, 161,
  111, 204, 220, 209, 78, 89, 72, 191, 157, 119, 226, 184, 244, 134, 21, 61,
  175, 15, 223, 100, 230, 28, 128, 185, 84, 208, 164, 44, 113, 105, 27, 85, 203,
  146, 153, 130, 66, 42, 250, 140, 174, 133, 115, 4, 52, 73, 65, 10, 104, 238,
  30, 211, 46, 121, 2, 190, 159, 172, 112, 156, 95, 47, 124, 177, 77, 202, 81,
  38, 123, 13, 182, 242, 64, 33, 225, 0, 241, 122, 210, 37, 106, 163, 82, 98,
  34, 218, 187, 214, 125, 132, 120, 219, 252, 32, 135, 215, 245, 48, 198, 222,
  76, 231, 213, 192, 227, 144, 19, 152, 110, 12, 217, 126, 196, 201, 248, 148,
  109, 138, 63, 249, 200, 36, 197, 101, 127, 145, 149, 54, 16, 167, 102, 80,
  239, 181, 14, 83, 224, 142, 69, 176, 118, 171, 251, 136, 43, 246, 155, 18,
  165, 68, 53, 90, 94, 41, 93, 162, 116, 212, 205, 25, 235, 193, 74, 58, 169,
  199, 17, 180, 49, 147, 92, 158, 160, 75, 141, 20, 96, 31, 137, 117, 186, 11,
  67, 233, 88, 91, 24, 97, 237, 247, 86, 195, 236, 39, 221, 87, 240, 178, 40,
  206, 194, 1, 207, 71, 150, 114, 56, 107, 243, 179, 166, 183, 50, 143, 254,
  154, 129, 59, 55, 23, 7, 8, 108, 151, 22, 139, 228, 253, 173, 26, 188, 35,
  255, 62, 70, 189, 6, 57,
]);

export const QUICK_PICK_ITEMS: QuickPickItem[] = [
  {
    label: "Fade Out Gradient",
    kind: QuickPickItemKind.Separator,
  },
  {
    label: "01",
    description: "Subtext - Fade Out Gradient - Unique Subtext",
  },
  {
    label: "02",
    description: "Subtext - Fade Out Gradient - Unique Text",
  },
  {
    label: "03",
    description: "Subtext - Fade Out Gradient - Commonly",
  },
  {
    label: "Fade In Gradient",
    kind: QuickPickItemKind.Separator,
  },
  {
    label: "04",
    description: "Subtext - Fade In Gradient - Unique Subtext",
  },
  {
    label: "05",
    description: "Subtext - Fade In Gradient - Unique Text",
  },
  {
    label: "06",
    description: "Subtext - Fade In Gradient - Commonly",
  },
  {
    label: "First Character Solid Color",
    kind: QuickPickItemKind.Separator,
  },
  {
    label: "07",
    description: "First Character - Solid Color - Unique Subtext",
  },
  {
    label: "08",
    description: "First Character - Solid Color - Unique Text",
  },
  {
    label: "09",
    description: "First Character - Solid Color - Commonly",
  },
  {
    label: "Emoji",
    kind: QuickPickItemKind.Separator,
  },
  {
    label: "10",
    description: "Whole Text - Emoji",
  },
  {
    label: "Whole Subtext Solid Color",
    kind: QuickPickItemKind.Separator,
  },
  {
    label: "11",
    description: "Subtext - Solid Color - Unique Subtext",
  },
];

export const ALPHA_MIXING_VALUES: number[] = [
  0.1, 0.23, 0.41, 0.56, 0.67, 0.76, 0.83, 0.88, 0.92, 0.95, 0.97, 0.98, 0.99,
  0.99, 1, 1, 1, 1, 1, 1,
];

export const EMOJIS: string[] = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "☺",
  "😚",
  "😙",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "🤥",
  "😌",
  "😔",
  "😪",
  "🤤",
  "😴",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🥴",
  "😵",
  "🤯",
  "🤠",
  "🥳",
  "😎",
  "🤓",
  "🧐",
  "😕",
  "😟",
  "🙁",
  "☹",
  "😮",
  "😯",
  "😲",
  "😳",
  "🥺",
  "😦",
  "😧",
  "😨",
  "😰",
  "😥",
  "😢",
  "😭",
  "😱",
  "😖",
  "😣",
  "😞",
  "😓",
  "😩",
  "😫",
  "🥱",
  "😤",
  "😡",
  "😠",
  "🤬",
  "😈",
  "👿",
  "💀",
  "☠",
  "💩",
  "🤡",
  "👹",
  "👺",
  "👻",
  "👽",
  "👾",
  "🤖",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "🙈",
  "🙉",
  "🙊",
  "💌",
  "💘",
  "💝",
  "💖",
  "💗",
  "💓",
  "💞",
  "💕",
  "💟",
  "❣",
  "💔",
  "❤",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤎",
  "🖤",
  "🤍",
  "💋",
  "💯",
  "💢",
  "💥",
  "💫",
  "💦",
  "💨",
  "🕳",
  "💬",
  "👁️‍🗨️",
  "🗨",
  "🗯",
  "💭",
  "💤",
  "👋",
  "🤚",
  "🖐",
  "✋",
  "🖖",
  "👌",
  "🤏",
  "✌",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍",
  "💅",
  "🤳",
  "💪",
  "🦾",
  "🦿",
  "🦵",
  "🦶",
  "👂",
  "🦻",
  "👃",
  "🧠",
  "🦷",
  "🦴",
  "👀",
  "👁",
  "👅",
  "👄",
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👱",
  "👨",
  "🧔",
  "👨‍🦰",
  "👨‍🦱",
  "👨‍🦳",
  "👨‍🦲",
  "👩",
  "👩‍🦰",
  "👩‍🦱",
  "👩‍🦳",
  "👩‍🦲",
  "👱‍♀️",
  "👱‍♂️",
  "🧓",
  "👴",
  "👵",
  "🙍",
  "🙍‍♂️",
  "🙍‍♀️",
  "🙎",
  "🙎‍♂️",
  "🙎‍♀️",
  "🙅",
  "🙅‍♂️",
  "🙅‍♀️",
  "🙆",
  "🙆‍♂️",
  "🙆‍♀️",
  "💁",
  "💁‍♂️",
  "💁‍♀️",
  "🙋",
  "🙋‍♂️",
  "🙋‍♀️",
  "🧏",
  "🙇",
  "🙇‍♂️",
  "🙇‍♀️",
  "🤦",
  "🤦‍♂️",
  "🤦‍♀️",
  "🤷",
  "🤷‍♂️",
  "🤷‍♀️",
  "👨‍⚕️",
  "👩‍⚕️",
  "👨‍🎓",
  "👩‍🎓",
  "👨‍🏫",
  "👩‍🏫",
  "👨‍⚖️",
  "👩‍⚖️",
  "👨‍🌾",
  "👩‍🌾",
  "👨‍🍳",
  "👩‍🍳",
  "👨‍🔧",
  "👩‍🔧",
  "👨‍🏭",
  "👩‍🏭",
  "👨‍💼",
  "👩‍💼",
  "👨‍🔬",
  "👩‍🔬",
  "👨‍💻",
  "👩‍💻",
  "👨‍🎤",
  "👩‍🎤",
  "👨‍🎨",
  "👩‍🎨",
  "👨‍✈️",
  "👩‍✈️",
  "👨‍🚀",
  "👩‍🚀",
  "👨‍🚒",
  "👩‍🚒",
  "👮",
  "👮‍♂️",
  "👮‍♀️",
  "🕵",
  "🕵️‍♂️",
  "🕵️‍♀️",
  "💂",
  "💂‍♂️",
  "💂‍♀️",
  "👷",
  "👷‍♂️",
  "👷‍♀️",
  "🤴",
  "👸",
  "👳",
  "👳‍♂️",
  "👳‍♀️",
  "👲",
  "🧕",
  "🤵",
  "👰",
  "🤰",
  "🤱",
  "👼",
  "🎅",
  "🤶",
  "🦸",
  "🦸‍♂️",
  "🦸‍♀️",
  "🦹",
  "🦹‍♂️",
  "🦹‍♀️",
  "🧙",
  "🧙‍♂️",
  "🧙‍♀️",
  "🧚",
  "🧚‍♂️",
  "🧚‍♀️",
  "🧛",
  "🧛‍♂️",
  "🧛‍♀️",
  "🧜",
  "🧜‍♂️",
  "🧜‍♀️",
  "🧝",
  "🧝‍♂️",
  "🧝‍♀️",
  "🧞",
  "🧞‍♂️",
  "🧞‍♀️",
  "🧟",
  "🧟‍♂️",
  "🧟‍♀️",
  "💆",
  "💆‍♂️",
  "💆‍♀️",
  "💇",
  "💇‍♂️",
  "💇‍♀️",
  "🚶",
  "🚶‍♂️",
  "🚶‍♀️",
  "🧍",
  "🧎",
  "👨‍🦼",
  "👩‍🦼",
  "👨‍🦽",
  "👩‍🦽",
  "🏃",
  "🏃‍♂️",
  "🏃‍♀️",
  "💃",
  "🕺",
  "🕴",
  "👯",
  "👯‍♂️",
  "👯‍♀️",
  "🧖",
  "🧖‍♂️",
  "🧖‍♀️",
  "🧗",
  "🧗‍♂️",
  "🧗‍♀️",
  "🤺",
  "🏇",
  "⛷",
  "🏂",
  "🏌",
  "🏌️‍♂️",
  "🏌️‍♀️",
  "🏄",
  "🏄‍♂️",
  "🏄‍♀️",
  "🚣",
  "🚣‍♂️",
  "🚣‍♀️",
  "🏊",
  "🏊‍♂️",
  "🏊‍♀️",
  "⛹",
  "⛹️‍♂️",
  "⛹️‍♀️",
  "🏋",
  "🏋️‍♂️",
  "🏋️‍♀️",
  "🚴",
  "🚴‍♂️",
  "🚴‍♀️",
  "🚵",
  "🚵‍♂️",
  "🚵‍♀️",
  "🤸",
  "🤸‍♂️",
  "🤸‍♀️",
  "🤼",
  "🤼‍♂️",
  "🤼‍♀️",
  "🤽",
  "🤽‍♂️",
  "🤽‍♀️",
  "🤾",
  "🤾‍♂️",
  "🤾‍♀️",
  "🤹",
  "🤹‍♂️",
  "🤹‍♀️",
  "🧘",
  "🧘‍♂️",
  "🧘‍♀️",
  "🛀",
  "🛌",
  "🧑‍🤝‍🧑",
  "👭",
  "👫",
  "👬",
  "💏",
  "👩‍❤️‍💋‍👨",
  "👨‍❤️‍💋‍👨",
  "👩‍❤️‍💋‍👩",
  "💑",
  "👩‍❤️‍👨",
  "👨‍❤️‍👨",
  "👩‍❤️‍👩",
  "👪",
  "👨‍👩‍👦",
  "👨‍👩‍👧",
  "👨‍👩‍👧‍👦",
  "👨‍👩‍👦‍👦",
  "👨‍👩‍👧‍👧",
  "👨‍👨‍👦",
  "👨‍👨‍👧",
  "👨‍👨‍👧‍👦",
  "👨‍👨‍👦‍👦",
  "👨‍👨‍👧‍👧",
  "👩‍👩‍👦",
  "👩‍👩‍👧",
  "👩‍👩‍👧‍👦",
  "👩‍👩‍👦‍👦",
  "👩‍👩‍👧‍👧",
  "👨‍👦",
  "👨‍👦‍👦",
  "👨‍👧",
  "👨‍👧‍👦",
  "👨‍👧‍👧",
  "👩‍👦",
  "👩‍👦‍👦",
  "👩‍👧",
  "👩‍👧‍👦",
  "👩‍👧‍👧",
  "🗣",
  "👤",
  "👥",
  "👣",
  "🦰",
  "🦱",
  "🦳",
  "🦲",
  "🐵",
  "🐒",
  "🦍",
  "🦧",
  "🐶",
  "🐕",
  "🦮",
  "🐕‍🦺",
  "🐩",
  "🐺",
  "🦊",
  "🦝",
  "🐱",
  "🐈",
  "🦁",
  "🐯",
  "🐅",
  "🐆",
  "🐴",
  "🐎",
  "🦄",
  "🦓",
  "🦌",
  "🐮",
  "🐂",
  "🐃",
  "🐄",
  "🐷",
  "🐖",
  "🐗",
  "🐽",
  "🐏",
  "🐑",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦏",
  "🦛",
  "🐭",
  "🐁",
  "🐀",
  "🐹",
  "🐰",
  "🐇",
  "🐿",
  "🦔",
  "🦇",
  "🐻",
  "🐨",
  "🐼",
  "🦥",
  "🦦",
  "🦨",
  "🦘",
  "🦡",
  "🐾",
  "🦃",
  "🐔",
  "🐓",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🐧",
  "🕊",
  "🦅",
  "🦆",
  "🦢",
  "🦉",
  "🦩",
  "🦚",
  "🦜",
  "🐸",
  "🐊",
  "🐢",
  "🦎",
  "🐍",
  "🐲",
  "🐉",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🐬",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐙",
  "🐚",
  "🐌",
  "🦋",
  "🐛",
  "🐜",
  "🐝",
  "🐞",
  "🦗",
  "🕷",
  "🕸",
  "🦂",
  "🦟",
  "🦠",
  "💐",
  "🌸",
  "💮",
  "🏵",
  "🌹",
  "🥀",
  "🌺",
  "🌻",
  "🌼",
  "🌷",
  "🌱",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌾",
  "🌿",
  "☘",
  "🍀",
  "🍁",
  "🍂",
  "🍃",
  "🍄",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥥",
  "🥑",
  "🍆",
  "🥔",
  "🥕",
  "🌽",
  "🌶",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🥜",
  "🌰",
  "🍞",
  "🥐",
  "🥖",
  "🥨",
  "🥯",
  "🥞",
  "🧇",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🌮",
  "🌯",
  "🥙",
  "🧆",
  "🥚",
  "🍳",
  "🥘",
  "🍲",
  "🥣",
  "🥗",
  "🍿",
  "🧈",
  "🧂",
  "🥫",
  "🍱",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥠",
  "🥡",
  "🦀",
  "🦞",
  "🦐",
  "🦑",
  "🦪",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍼",
  "🥛",
  "☕",
  "🍵",
  "🍶",
  "🍾",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🥤",
  "🧃",
  "🧉",
  "🧊",
  "🥢",
  "🍽",
  "🍴",
  "🥄",
  "🔪",
  "🏺",
  "🌍",
  "🌎",
  "🌏",
  "🌐",
  "🗺",
  "🗾",
  "🧭",
  "🏔",
  "⛰",
  "🌋",
  "🗻",
  "🏕",
  "🏖",
  "🏜",
  "🏝",
  "🏞",
  "🏟",
  "🏛",
  "🏗",
  "🧱",
  "🏘",
  "🏚",
  "🏠",
  "🏡",
  "🏢",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏨",
  "🏩",
  "🏪",
  "🏫",
  "🏬",
  "🏭",
  "🏯",
  "🏰",
  "💒",
  "🗼",
  "🗽",
  "⛪",
  "🕌",
  "🛕",
  "🕍",
  "⛩",
  "🕋",
  "⛲",
  "⛺",
  "🌁",
  "🌃",
  "🏙",
  "🌄",
  "🌅",
  "🌆",
  "🌇",
  "🌉",
  "♨",
  "🎠",
  "🎡",
  "🎢",
  "💈",
  "🎪",
  "🚂",
  "🚃",
  "🚄",
  "🚅",
  "🚆",
  "🚇",
  "🚈",
  "🚉",
  "🚊",
  "🚝",
  "🚞",
  "🚋",
  "🚌",
  "🚍",
  "🚎",
  "🚐",
  "🚑",
  "🚒",
  "🚓",
  "🚔",
  "🚕",
  "🚖",
  "🚗",
  "🚘",
  "🚙",
  "🚚",
  "🚛",
  "🚜",
  "🏎",
  "🏍",
  "🛵",
  "🦽",
  "🦼",
  "🛺",
  "🚲",
  "🛴",
  "🛹",
  "🚏",
  "🛣",
  "🛤",
  "🛢",
  "⛽",
  "🚨",
  "🚥",
  "🚦",
  "🛑",
  "🚧",
  "⚓",
  "⛵",
  "🛶",
  "🚤",
  "🛳",
  "⛴",
  "🛥",
  "🚢",
  "✈",
  "🛩",
  "🛫",
  "🛬",
  "🪂",
  "💺",
  "🚁",
  "🚟",
  "🚠",
  "🚡",
  "🛰",
  "🚀",
  "🛸",
  "🛎",
  "🧳",
  "⌛",
  "⏳",
  "⌚",
  "⏰",
  "⏱",
  "⏲",
  "🕰",
  "🕛",
  "🕧",
  "🕐",
  "🕜",
  "🕑",
  "🕝",
  "🕒",
  "🕞",
  "🕓",
  "🕟",
  "🕔",
  "🕠",
  "🕕",
  "🕡",
  "🕖",
  "🕢",
  "🕗",
  "🕣",
  "🕘",
  "🕤",
  "🕙",
  "🕥",
  "🕚",
  "🕦",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌙",
  "🌚",
  "🌛",
  "🌜",
  "🌡",
  "☀",
  "🌝",
  "🌞",
  "🪐",
  "⭐",
  "🌟",
  "🌠",
  "🌌",
  "☁",
  "⛅",
  "⛈",
  "🌤",
  "🌥",
  "🌦",
  "🌧",
  "🌨",
  "🌩",
  "🌪",
  "🌫",
  "🌬",
  "🌀",
  "🌈",
  "🌂",
  "☂",
  "☔",
  "⛱",
  "⚡",
  "❄",
  "☃",
  "⛄",
  "☄",
  "🔥",
  "💧",
  "🌊",
  "🎃",
  "🎄",
  "🎆",
  "🎇",
  "🧨",
  "✨",
  "🎈",
  "🎉",
  "🎊",
  "🎋",
  "🎍",
  "🎎",
  "🎏",
  "🎐",
  "🎑",
  "🧧",
  "🎀",
  "🎁",
  "🎗",
  "🎟",
  "🎫",
  "🎖",
  "🏆",
  "🏅",
  "🥇",
  "🥈",
  "🥉",
  "⚽",
  "⚾",
  "🥎",
  "🏀",
  "🏐",
  "🏈",
  "🏉",
  "🎾",
  "🥏",
  "🎳",
  "🏏",
  "🏑",
  "🏒",
  "🥍",
  "🏓",
  "🏸",
  "🥊",
  "🥋",
  "🥅",
  "⛳",
  "⛸",
  "🎣",
  "🤿",
  "🎽",
  "🎿",
  "🛷",
  "🥌",
  "🎯",
  "🪀",
  "🪁",
  "🔫",
  "🎱",
  "🔮",
  "🎮",
  "🕹",
  "🎰",
  "🎲",
  "🧩",
  "🧸",
  "♠",
  "♥",
  "♦",
  "♣",
  "♟",
  "🃏",
  "🀄",
  "🎴",
  "🎭",
  "🖼",
  "🎨",
  "🧵",
  "🧶",
  "👓",
  "🕶",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩱",
  "🩲",
  "🩳",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "🛍",
  "🎒",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "⛑",
  "📿",
  "💄",
  "💍",
  "💎",
  "🔇",
  "🔈",
  "🔉",
  "🔊",
  "📢",
  "📣",
  "📯",
  "🔔",
  "🔕",
  "🎼",
  "🎵",
  "🎶",
  "🎙",
  "🎚",
  "🎛",
  "🎤",
  "🎧",
  "📻",
  "🎷",
  "🎸",
  "🎹",
  "🎺",
  "🎻",
  "🪕",
  "🥁",
  "📱",
  "📲",
  "☎",
  "📞",
  "📟",
  "📠",
  "🔋",
  "🔌",
  "💻",
  "🖥",
  "🖨",
  "⌨",
  "🖱",
  "🖲",
  "💽",
  "💾",
  "💿",
  "📀",
  "🧮",
  "🎥",
  "🎞",
  "📽",
  "🎬",
  "📺",
  "📷",
  "📸",
  "📹",
  "📼",
  "🔍",
  "🔎",
  "🕯",
  "💡",
  "🔦",
  "🏮",
  "🪔",
  "📔",
  "📕",
  "📖",
  "📗",
  "📘",
  "📙",
  "📚",
  "📓",
  "📒",
  "📃",
  "📜",
  "📄",
  "📰",
  "🗞",
  "📑",
  "🔖",
  "🏷",
  "💰",
  "💴",
  "💵",
  "💶",
  "💷",
  "💸",
  "💳",
  "🧾",
  "💹",
  "✉",
  "📧",
  "📨",
  "📩",
  "📤",
  "📥",
  "📦",
  "📫",
  "📪",
  "📬",
  "📭",
  "📮",
  "🗳",
  "✏",
  "✒",
  "🖋",
  "🖊",
  "🖌",
  "🖍",
  "📝",
  "💼",
  "📁",
  "📂",
  "🗂",
  "📅",
  "📆",
  "🗒",
  "🗓",
  "📇",
  "📈",
  "📉",
  "📊",
  "📋",
  "📌",
  "📍",
  "📎",
  "🖇",
  "📏",
  "📐",
  "✂",
  "🗃",
  "🗄",
  "🗑",
  "🔒",
  "🔓",
  "🔏",
  "🔐",
  "🔑",
  "🗝",
  "🔨",
  "🪓",
  "⛏",
  "⚒",
  "🛠",
  "🗡",
  "⚔",
  "💣",
  "🏹",
  "🛡",
  "🔧",
  "🔩",
  "⚙",
  "🗜",
  "⚖",
  "🦯",
  "🔗",
  "⛓",
  "🧰",
  "🧲",
  "⚗",
  "🧪",
  "🧫",
  "🧬",
  "🔬",
  "🔭",
  "📡",
  "💉",
  "🩸",
  "💊",
  "🩹",
  "🩺",
  "🚪",
  "🛏",
  "🛋",
  "🪑",
  "🚽",
  "🚿",
  "🛁",
  "🪒",
  "🧴",
  "🧷",
  "🧹",
  "🧺",
  "🧻",
  "🧼",
  "🧽",
  "🧯",
  "🛒",
  "🚬",
  "⚰",
  "⚱",
  "🧿",
  "🗿",
  "🏧",
  "🚮",
  "🚰",
  "♿",
  "🚹",
  "🚺",
  "🚻",
  "🚼",
  "🚾",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "⚠",
  "🚸",
  "⛔",
  "🚫",
  "🚳",
  "🚭",
  "🚯",
  "🚱",
  "🚷",
  "📵",
  "🔞",
  "☢",
  "☣",
  "⬆",
  "↗",
  "➡",
  "↘",
  "⬇",
  "↙",
  "⬅",
  "↖",
  "↕",
  "↔",
  "↩",
  "↪",
  "⤴",
  "⤵",
  "🔃",
  "🔄",
  "🔙",
  "🔚",
  "🔛",
  "🔜",
  "🔝",
  "🛐",
  "⚛",
  "🕉",
  "✡",
  "☸",
  "☯",
  "✝",
  "☦",
  "☪",
  "☮",
  "🕎",
  "🔯",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "⛎",
  "🔀",
  "🔁",
  "🔂",
  "▶",
  "⏩",
  "⏭",
  "⏯",
  "◀",
  "⏪",
  "⏮",
  "🔼",
  "⏫",
  "🔽",
  "⏬",
  "⏸",
  "⏹",
  "⏺",
  "⏏",
  "🎦",
  "🔅",
  "🔆",
  "📶",
  "📳",
  "📴",
  "♀",
  "♂",
  "✖",
  "➕",
  "➖",
  "➗",
  "♾",
  "‼",
  "⁉",
  "❓",
  "❔",
  "❕",
  "❗",
  "〰",
  "💱",
  "💲",
  "⚕",
  "♻",
  "⚜",
  "🔱",
  "📛",
  "🔰",
  "⭕",
  "✅",
  "☑",
  "✔",
  "❌",
  "❎",
  "➰",
  "➿",
  "〽",
  "✳",
  "✴",
  "❇",
  "©",
  "®",
  "™",
  "#️⃣",
  "*️⃣",
  "0️⃣",
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
  "🔠",
  "🔡",
  "🔢",
  "🔣",
  "🔤",
  "🅰",
  "🆎",
  "🅱",
  "🆑",
  "🆒",
  "🆓",
  "ℹ",
  "🆔",
  "Ⓜ",
  "🆕",
  "🆖",
  "🅾",
  "🆗",
  "🅿",
  "🆘",
  "🆙",
  "🆚",
  "🈁",
  "🈂",
  "🈷",
  "🈶",
  "🈯",
  "🉐",
  "🈹",
  "🈚",
  "🈲",
  "🉑",
  "🈸",
  "🈴",
  "🈳",
  "㊗",
  "㊙",
  "🈺",
  "🈵",
  "🔴",
  "🟠",
  "🟡",
  "🟢",
  "🔵",
  "🟣",
  "🟤",
  "⚫",
  "⚪",
  "🟥",
  "🟧",
  "🟨",
  "🟩",
  "🟦",
  "🟪",
  "🟫",
  "⬛",
  "⬜",
  "◼",
  "◻",
  "◾",
  "◽",
  "▪",
  "▫",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
  "🔺",
  "🔻",
  "💠",
  "🔘",
  "🔳",
  "🔲",
];
