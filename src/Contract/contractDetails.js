// export const contractAddress = '0x8BC7D4aF849861f363af45671Ebb690Fe4BE49Bb'
export const contractAddress = '0x5C8a1f4936084FC7003326025d21Fe34CDD4f688'

// export const contractABI = [
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'name',
// 				type: 'string',
// 			},
// 			{
// 				internalType: 'string',
// 				name: 'symbol',
// 				type: 'string',
// 			},
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'constructor',
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address',
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'approved',
// 				type: 'address',
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'Approval',
// 		type: 'event',
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address',
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address',
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool',
// 			},
// 		],
// 		name: 'ApprovalForAll',
// 		type: 'event',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'approve',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [],
// 		name: 'claimOwnerShip',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '_newOwner',
// 				type: 'address',
// 			},
// 		],
// 		name: 'grantOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256',
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: '',
// 				type: 'address',
// 			},
// 		],
// 		name: 'Minted',
// 		type: 'event',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'string',
// 				name: 'tokenURL',
// 				type: 'string',
// 			},
// 		],
// 		name: 'mintNFT',
// 		outputs: [],
// 		stateMutability: 'payable',
// 		type: 'function',
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: '',
// 				type: 'address',
// 			},
// 		],
// 		name: 'OwnershipClaimed',
// 		type: 'event',
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: '',
// 				type: 'address',
// 			},
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 			{
// 				internalType: 'bytes',
// 				name: '_data',
// 				type: 'bytes',
// 			},
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool',
// 			},
// 		],
// 		name: 'setApprovalForAll',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'bool',
// 				name: '_transferrable',
// 				type: 'bool',
// 			},
// 		],
// 		name: 'setTransferProperty',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address',
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address',
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'Transfer',
// 		type: 'event',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'transferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address',
// 			},
// 		],
// 		name: 'balanceOf',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'getApproved',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address',
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address',
// 			},
// 		],
// 		name: 'isApprovedForAll',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_CAP',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [],
// 		name: 'name',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'ownerOf',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'bytes4',
// 				name: 'interfaceId',
// 				type: 'bytes4',
// 			},
// 		],
// 		name: 'supportsInterface',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [],
// 		name: 'symbol',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256',
// 			},
// 		],
// 		name: 'tokenURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string',
// 			},
// 		],
// 		stateMutability: 'view',
// 		type: 'function',
// 	},
// ]

export const contractABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'approved',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAll',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'claimOwnerShip',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newOwner',
				type: 'address',
			},
		],
		name: 'grantOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'Minted',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'tokenURL',
				type: 'string',
			},
		],
		name: 'mintNFT',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'OwnershipClaimed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: '_transferrable',
				type: 'bool',
			},
		],
		name: 'setTransferProperty',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getApproved',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'isMinted',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'MAX_CAP',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ownerOf',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'tokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]
