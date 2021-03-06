/*
 * Copyright 2015-2016 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Dataset } from "plywood";

interface CharacterSetRow {
  CHARACTER_SET_NAME: string;
  DEFAULT_COLLATE_NAME: string;
  DESCRIPTION: string;
  MAXLEN: number;
}

const characterSetsData: CharacterSetRow[] = [
  {
    "CHARACTER_SET_NAME": "big5",
    "DEFAULT_COLLATE_NAME": "big5_chinese_ci",
    "DESCRIPTION": "Big5 Traditional Chinese",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "dec8",
    "DEFAULT_COLLATE_NAME": "dec8_swedish_ci",
    "DESCRIPTION": "DEC West European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "cp850",
    "DEFAULT_COLLATE_NAME": "cp850_general_ci",
    "DESCRIPTION": "DOS West European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "hp8",
    "DEFAULT_COLLATE_NAME": "hp8_english_ci",
    "DESCRIPTION": "HP West European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "koi8r",
    "DEFAULT_COLLATE_NAME": "koi8r_general_ci",
    "DESCRIPTION": "KOI8-R Relcom Russian",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "latin1",
    "DEFAULT_COLLATE_NAME": "latin1_swedish_ci",
    "DESCRIPTION": "cp1252 West European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "latin2",
    "DEFAULT_COLLATE_NAME": "latin2_general_ci",
    "DESCRIPTION": "ISO 8859-2 Central European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "swe7",
    "DEFAULT_COLLATE_NAME": "swe7_swedish_ci",
    "DESCRIPTION": "7bit Swedish",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "ascii",
    "DEFAULT_COLLATE_NAME": "ascii_general_ci",
    "DESCRIPTION": "US ASCII",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "ujis",
    "DEFAULT_COLLATE_NAME": "ujis_japanese_ci",
    "DESCRIPTION": "EUC-JP Japanese",
    "MAXLEN": 3
  },
  {
    "CHARACTER_SET_NAME": "sjis",
    "DEFAULT_COLLATE_NAME": "sjis_japanese_ci",
    "DESCRIPTION": "Shift-JIS Japanese",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "hebrew",
    "DEFAULT_COLLATE_NAME": "hebrew_general_ci",
    "DESCRIPTION": "ISO 8859-8 Hebrew",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "tis620",
    "DEFAULT_COLLATE_NAME": "tis620_thai_ci",
    "DESCRIPTION": "TIS620 Thai",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "euckr",
    "DEFAULT_COLLATE_NAME": "euckr_korean_ci",
    "DESCRIPTION": "EUC-KR Korean",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "koi8u",
    "DEFAULT_COLLATE_NAME": "koi8u_general_ci",
    "DESCRIPTION": "KOI8-U Ukrainian",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "gb2312",
    "DEFAULT_COLLATE_NAME": "gb2312_chinese_ci",
    "DESCRIPTION": "GB2312 Simplified Chinese",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "greek",
    "DEFAULT_COLLATE_NAME": "greek_general_ci",
    "DESCRIPTION": "ISO 8859-7 Greek",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "cp1250",
    "DEFAULT_COLLATE_NAME": "cp1250_general_ci",
    "DESCRIPTION": "Windows Central European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "gbk",
    "DEFAULT_COLLATE_NAME": "gbk_chinese_ci",
    "DESCRIPTION": "GBK Simplified Chinese",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "latin5",
    "DEFAULT_COLLATE_NAME": "latin5_turkish_ci",
    "DESCRIPTION": "ISO 8859-9 Turkish",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "armscii8",
    "DEFAULT_COLLATE_NAME": "armscii8_general_ci",
    "DESCRIPTION": "ARMSCII-8 Armenian",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "utf8",
    "DEFAULT_COLLATE_NAME": "utf8_general_ci",
    "DESCRIPTION": "UTF-8 Unicode",
    "MAXLEN": 3
  },
  {
    "CHARACTER_SET_NAME": "ucs2",
    "DEFAULT_COLLATE_NAME": "ucs2_general_ci",
    "DESCRIPTION": "UCS-2 Unicode",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "cp866",
    "DEFAULT_COLLATE_NAME": "cp866_general_ci",
    "DESCRIPTION": "DOS Russian",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "keybcs2",
    "DEFAULT_COLLATE_NAME": "keybcs2_general_ci",
    "DESCRIPTION": "DOS Kamenicky Czech-Slovak",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "macce",
    "DEFAULT_COLLATE_NAME": "macce_general_ci",
    "DESCRIPTION": "Mac Central European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "macroman",
    "DEFAULT_COLLATE_NAME": "macroman_general_ci",
    "DESCRIPTION": "Mac West European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "cp852",
    "DEFAULT_COLLATE_NAME": "cp852_general_ci",
    "DESCRIPTION": "DOS Central European",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "latin7",
    "DEFAULT_COLLATE_NAME": "latin7_general_ci",
    "DESCRIPTION": "ISO 8859-13 Baltic",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "utf8mb4",
    "DEFAULT_COLLATE_NAME": "utf8mb4_general_ci",
    "DESCRIPTION": "UTF-8 Unicode",
    "MAXLEN": 4
  },
  {
    "CHARACTER_SET_NAME": "cp1251",
    "DEFAULT_COLLATE_NAME": "cp1251_general_ci",
    "DESCRIPTION": "Windows Cyrillic",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "utf16",
    "DEFAULT_COLLATE_NAME": "utf16_general_ci",
    "DESCRIPTION": "UTF-16 Unicode",
    "MAXLEN": 4
  },
  {
    "CHARACTER_SET_NAME": "utf16le",
    "DEFAULT_COLLATE_NAME": "utf16le_general_ci",
    "DESCRIPTION": "UTF-16LE Unicode",
    "MAXLEN": 4
  },
  {
    "CHARACTER_SET_NAME": "cp1256",
    "DEFAULT_COLLATE_NAME": "cp1256_general_ci",
    "DESCRIPTION": "Windows Arabic",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "cp1257",
    "DEFAULT_COLLATE_NAME": "cp1257_general_ci",
    "DESCRIPTION": "Windows Baltic",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "utf32",
    "DEFAULT_COLLATE_NAME": "utf32_general_ci",
    "DESCRIPTION": "UTF-32 Unicode",
    "MAXLEN": 4
  },
  {
    "CHARACTER_SET_NAME": "binary",
    "DEFAULT_COLLATE_NAME": "binary",
    "DESCRIPTION": "Binary pseudo charset",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "geostd8",
    "DEFAULT_COLLATE_NAME": "geostd8_general_ci",
    "DESCRIPTION": "GEOSTD8 Georgian",
    "MAXLEN": 1
  },
  {
    "CHARACTER_SET_NAME": "cp932",
    "DEFAULT_COLLATE_NAME": "cp932_japanese_ci",
    "DESCRIPTION": "SJIS for Windows Japanese",
    "MAXLEN": 2
  },
  {
    "CHARACTER_SET_NAME": "eucjpms",
    "DEFAULT_COLLATE_NAME": "eucjpms_japanese_ci",
    "DESCRIPTION": "UJIS for Windows Japanese",
    "MAXLEN": 3
  },
  {
    "CHARACTER_SET_NAME": "gb18030",
    "DEFAULT_COLLATE_NAME": "gb18030_chinese_ci",
    "DESCRIPTION": "China National Standard GB18030",
    "MAXLEN": 4
  }
];

export function getCharacterSetsDataset() {
  return Dataset.fromJS(characterSetsData);
}
