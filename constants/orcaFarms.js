import { FARM_PLATFORMS } from '../constants/farmConstants';

import { NATIVE_SOL, TOKENS } from './tokens';

export const ORCA_FARMS = [
  {
    symbol: 'sRLY-SOL-ORCA',
    name: 'sRLY-SOL LP',
    coin: { ...TOKENS.sRLY },
    pc: { ...TOKENS.SOL },
    coins: [TOKENS.sRLY, TOKENS.SOL],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.sRLY },

    mintAddress: '3dXdXg5HPyZ73GFC9LkSn3thdJUGeXWB8iSTHs5UcqiH',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 72,
    maxPositionLimitInUsd: 200000
  },
  {
    symbol: 'GMT-USDC-ORCA',
    name: 'GMT-USDC LP',
    coin: { ...TOKENS.GMT },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.GMT, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'CFxQF5kNAtbbDj298Xr47Sf4mkSyuzWpRH97hrdQ6kxi',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 74,
    maxPositionLimitInUsd: 500000
  },
  {
    symbol: 'GST-USDC-ORCA',
    name: 'GST-USDC LP',
    coin: { ...TOKENS.GST },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.GST, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'E6FUnQHGHJVJg7oExVr5Moeaj1QpdpZQF5odYjHXWPZb',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 64,
    maxPositionLimitInUsd: 500000
  },
  {
    symbol: 'USDC-USDT',
    name: 'USDC-USDT LP',
    coin: { ...TOKENS.USDC },
    pc: { ...TOKENS.USDT },
    coins: [TOKENS.USDC, TOKENS.USDT],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'H2uzgruPvonVpCRhwwdukcpXK8TG17swFNzYFr2rtPxy',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 255,
    maxPositionLimitInUsd: 0
  },
  {
    symbol: 'stSOL-wUST-ORCA',
    name: 'stSOL-wUST LP',
    coin: { ...TOKENS.stSOL },
    pc: { ...TOKENS.wUST },
    coins: [TOKENS.stSOL, TOKENS.wUST],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.wLDO },

    mintAddress: 'HTZd53fYwYQRyAjiaPsZy9Gf41gobFdqkF4oKe3XLi95',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 63,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'stSOL-USDC',
    name: 'stSOL-USDC LP',
    coin: { ...TOKENS.stSOL },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.stSOL, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.wLDO },

    mintAddress: 'GtQ1NT7R5aaTiST7K6ZWdMhwDdFxsSFvVFhBo8vyHGAq',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 58,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'BASIS-USDC',
    name: 'BASIS-USDC LP',
    coin: { ...TOKENS.BASIS },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.BASIS, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.BASIS },

    mintAddress: 'GoaAiajubRgeCFEz9L6mLnSmT2QFegoJDH5tpLfivpj',
    decimals: TOKENS.BASIS.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 57,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'SHDW-USDC',
    name: 'SHDW-USDC LP',
    coin: { ...TOKENS.SHDW },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.SHDW, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.SHDW },

    mintAddress: 'DJqqvzSuPaWThfzwMjXx7H2ZmHDdwxza6NtFudtuXcpc',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 55,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'SHDW-SOL',
    name: 'SHDW-SOL LP',
    coin: { ...TOKENS.SHDW },
    pc: { ...TOKENS.WSOL },
    coins: [TOKENS.SHDW, NATIVE_SOL],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.SHDW },

    mintAddress: '2ws7g3LBPdctfKn42Di9qxzQtUJ8ZL1aEAX2rGEQMNqh',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 56,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'ORCA-USDC',
    name: 'ORCA-USDC LP',
    coin: { ...TOKENS.ORCA },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.ORCA, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 17,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'ORCA-SOL',
    name: 'ORCA-SOL LP',
    coin: { ...TOKENS.ORCA },
    pc: { ...TOKENS.WSOL },
    coins: [TOKENS.ORCA, NATIVE_SOL],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: '2uVjAuRXavpM6h1scGQaxqb6HVaNRn6T2X7HHXTabz25',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 18,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'SOL-USDC',
    name: 'SOL-USDC LP',
    coin: { ...NATIVE_SOL },
    pc: { ...TOKENS.USDC },
    coins: [NATIVE_SOL, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 24,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'SOL-USDT',
    name: 'SOL-USDT LP',
    coin: { ...NATIVE_SOL },
    pc: { ...TOKENS.USDT },
    coins: [NATIVE_SOL, TOKENS.USDT],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'FZthQCuYHhcfiDma7QrX7buDHwrZEd7vL8SjS6LQa3Tx',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 25,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'ATLAS-USDC-ORCA',
    name: 'ATLAS-USDC LP',
    coin: { ...TOKENS.ATLAS },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.ATLAS, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ATLAS },

    mintAddress: 'FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 27,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'POLIS-USDC-ORCA',
    name: 'POLIS-USDC LP',
    coin: { ...TOKENS.POLIS },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.POLIS, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.POLIS },

    mintAddress: 'GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 28,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'SAMO-USDC',
    name: 'SAMO-USDC LP',
    coin: { ...TOKENS.SAMO },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.SAMO, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.SAMO },

    mintAddress: '6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 37,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'WHETH-USDC',
    name: 'whETH-USDC LP',
    coin: { ...TOKENS.whETH },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.whETH, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },
    mintAddress: '7NPtjjAP7vhp4t5NCLyY4DY5rurvyc8cgZ2a2rYabRia',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 29,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'WHETH-SOL',
    name: 'whETH-SOL LP',
    coin: { ...TOKENS.whETH },
    pc: { ...NATIVE_SOL },
    coins: [TOKENS.whETH, NATIVE_SOL],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },
    mintAddress: '7aYnrdmdCRodDy2Czn6keUquUhjF1jPEmfwZPh488z8U',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 30,
    maxPositionLimitInUsd: 9000000
  },
  {
    symbol: 'MSOL-SOL',
    name: 'mSOL-SOL LP',
    coin: { ...TOKENS.MSOLORCA },
    pc: { ...NATIVE_SOL },
    coins: [TOKENS.MSOLORCA, NATIVE_SOL],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: '29cdoMgu6MS2VXpcMo1sqRdWEzdUR9tjvoh8fcK8Z87R',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 255,
    maxPositionLimitInUsd: 0
  },
  {
    symbol: 'SOCN-USDC',
    name: 'SOCN-USDC LP',
    coin: { ...TOKENS.socn },
    pc: { ...TOKENS.USDC },
    coins: [TOKENS.socn, TOKENS.USDC],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'Dkr8B675PGnNwEr9vTKXznjjHke5454EQdz3iaSbparB',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 255,
    maxPositionLimitInUsd: 0
  },
  {
    symbol: 'SOCN-SOL',
    name: 'SOCN-SOL LP',
    coin: { ...TOKENS.socn },
    pc: { ...NATIVE_SOL },
    coins: [TOKENS.socn, NATIVE_SOL],
    reward: { ...TOKENS.ORCA },
    rewardB: { ...TOKENS.ORCA },

    mintAddress: 'APNpzQvR91v1THbsAyG3HHrUEwvexWYeNCFLQuVnxgMc',
    decimals: TOKENS.ORCA.decimals,
    dualYield: false,
    liquidityMining: false,
    totalTulipEmission: 0,
    platform: FARM_PLATFORMS.ORCA,
    marginIndex: 255,
    maxPositionLimitInUsd: 0
  }
];