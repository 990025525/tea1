import { NATIVE_SOL, TOKENS } from './tokens';
import { FARM_PLATFORMS } from './farmConstants';

export const RAYDIUM_VAULTS = [
  {
    symbol: 'TULIP-USDC',
    name: 'TULIP-USDC LP',
    configName: 'RAYDIUM-TULIP-USDC',
    coin: { ...TOKENS.TULIP },
    pc: { ...TOKENS.USDC },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.TULIP },

    mintAddress: '2doeZGLJyACtaG9DCUyqMLtswesfje1hjNA11hMdj6YU',
    decimals: TOKENS.TULIP.decimals,
    dualYield: false,
    liquidityMining: true,
    totalTulipEmission: 450000 / 810,
    saber: false,
    hidden: true,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.TULIP, TOKENS.USDC],
    marginIndex: 11,
    slippageWarning: true,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=96hPvuJ3SRT82m7BAc7G1AUVPVcoj8DABAa5gT7wjgzX',
    rewardEndSlot: 93847628
  },
  {
    symbol: 'RAY-USDC',
    name: 'RAY-USDC LP',
    coin: { ...TOKENS.RAY },
    pc: { ...TOKENS.USDC },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.RAY },

    mintAddress: 'FbC6K13MzHvN42bXrtGaWsvZY9fxrackRSZcBGfjPc7m',
    decimals: TOKENS.RAY.decimals,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.RAY, TOKENS.USDC],
    marginIndex: 0,
    whitelisted: false,
    disabled: false,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg',
    migrated: true,
    rewardEndSlot: 94285165,
    highLiquidity: true
  },
  {
    symbol: 'RAY-SRM',
    name: 'RAY-SRM LP',
    coin: { ...TOKENS.RAY },
    pc: { ...TOKENS.SRM },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.RAY },

    mintAddress: '7P5Thr9Egi2rvMmEuQkLn8x8e8Qro7u2U7yLD2tU2Hbe',
    decimals: TOKENS.RAY.decimals,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.RAY, TOKENS.SRM],
    marginIndex: 3,
    whitelisted: false,
    disabled: false,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=GaqgfieVmnmY4ZsZHHA6L5RSVzCGL3sKx4UgHBaYNy8m',
    migrated: true,
    rewardEndSlot: 94284925,
    highLiquidity: true
  },
  {
    symbol: 'ATLAS-RAY',
    name: 'ATLAS-RAY LP',
    coin: { ...TOKENS.ATLAS },
    pc: { ...TOKENS.RAY },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.ATLAS },

    mintAddress: '418MFhkaYQtbn529wmjLLqL6uKxDz7j4eZBaV1cobkyd',
    decimals: TOKENS.ATLAS.decimals,
    dualYield: true,
    liquidityMining: false,
    totalTulipEmission: 0,
    saber: false,
    coins: [TOKENS.ATLAS, TOKENS.RAY],
    marginIndex: 20,
    slippageWarning: false,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=F73euqPynBwrgcZn3fNSEneSnYasDQohPM5aZazW9hp2',
    rewardEndSlot: 93847628,
    platform: FARM_PLATFORMS.RAYDIUM
  },
  {
    symbol: 'RAY-USDT',
    name: 'RAY-USDT LP',
    coin: { ...TOKENS.RAY },
    pc: { ...TOKENS.USDT },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.RAY },

    mintAddress: 'C3sT1R3nsw4AVdepvLTLKr5Gvszr7jufyBWUCvy4TUvT',
    decimals: TOKENS.RAY.decimals,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.RAY, TOKENS.USDT],
    marginIndex: 2,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=DVa7Qmb5ct9RCpaU7UTpSaf3GVMYz17vNVU67XpdCRut',
    rewardEndSlot: 94284901
  },
  {
    symbol: 'RAY-ETH',
    name: 'RAY-ETH LP',
    coin: { ...TOKENS.RAY },
    pc: { ...TOKENS.ETH },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.RAY },

    mintAddress: 'mjQH33MqZv5aKAbKHi8dG3g3qXeRQqq1GFcXceZkNSr',
    decimals: TOKENS.RAY.decimals,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.RAY, TOKENS.ETH],
    whitelisted: false,
    disabled: false,
    marginIndex: 7,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=8iQFhWyceGREsWnLM8NkG9GC8DvZunGZyMzuyUScgkMK',
    migrated: true,
    rewardEndSlot: 94284954,
    highLiquidity: true
  },
  {
    symbol: 'RAY-SOL',
    name: 'RAY-SOL LP',
    coin: { ...TOKENS.RAY },
    pc: { ...NATIVE_SOL },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.RAY },

    mintAddress: '89ZKE4aoyfLBe2RuV6jM3JGNhaV18Nxh8eNtjRcndBip',
    decimals: TOKENS.RAY.decimals,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.RAY, NATIVE_SOL],
    marginIndex: 1,
    whitelisted: false,
    disabled: false,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA',
    migrated: true,
    rewardEndSlot: 94284942
  },
  {
    symbol: 'stSOL-USDT',
    name: 'stSOL-USDT LP',
    coin: { ...TOKENS.stSOL },
    pc: { ...TOKENS.USDT },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.wLDO },
    hidden: true,
    mintAddress: '2pdg9vAH8GsTTWSSP3Za6j5ts4Nzs6tEbNterVe9H62H',
    decimals: 9,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.stSOL, TOKENS.USDT],
    marginIndex: 99999,
    whitelisted: false,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=9euZD3C1d7e2fLKnUxHc7oUUDJcYnguMT6cRzLY9y4o7',
    migrated: true,
    rewardEndSlot: 94284925,
    highLiquidity: true
  },
  {
    symbol: 'stSOL-USDC',
    name: 'stSOL-USDC LP',
    coin: { ...TOKENS.stSOL },
    pc: { ...TOKENS.USDC },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.wLDO },
    mintAddress: 'HDUJMwYZkjUZre63xUeDhdCi8c6LgUDiBqxmP3QC3VPX',
    decimals: 9,
    liquidityMining: true,
    totalTulipEmission: 750000 / 630,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.stSOL, TOKENS.USDC],
    marginIndex: 99999,
    whitelisted: false,
    disabled: false,
    hidden: true,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj',
    migrated: true,
    rewardEndSlot: 94284925,
    highLiquidity: true
  },
  {
    symbol: 'PSY-USDC',
    name: 'PSY-USDC LP',
    coin: { ...TOKENS.PSY },
    pc: { ...TOKENS.USDC },
    reward: { ...TOKENS.RAY },
    rewardB: { ...TOKENS.PSY },
    hidden: true,
    mintAddress: 'Hrip9d8f6iQ4JxfB85JyGGq3u2WgpmqRSXJZursm26hd',
    decimals: TOKENS.RAY.decimals,
    totalTulipEmission: 0,
    saber: false,
    platform: FARM_PLATFORMS.RAYDIUM,
    coins: [TOKENS.PSY, TOKENS.USDC],
    marginIndex: 1,
    whitelisted: false,
    disabled: false,
    maxPositionLimitInUsd: 9000000,
    link: 'https://raydium.io/liquidity/?ammId=GzK2YLiBssuahApy9EJRbFVAmVDssLBxqcz2rmCHDcb8',
    migrated: true
  }
];