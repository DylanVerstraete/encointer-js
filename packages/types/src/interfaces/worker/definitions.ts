export default {
  rpc: {},
  types: {
    ShardIdentifier: 'Hash',
    GetterArgs: '(AccountId, CommunityIdentifier)',
    Enclave: {
      pubkey: 'AccountId',
      mrenclave: 'Hash',
      timestamp: 'u64',
      url: 'Text'
    },
    PublicGetter: {
      _enum: {
        total_issuance: 'CommunityIdentifier',
        participant_count: 'CommunityIdentifier',
        meetup_count: 'CommunityIdentifier',
        ceremony_reward: 'CommunityIdentifier',
        location_tolerance: 'CommunityIdentifier',
        time_tolerance: 'CommunityIdentifier',
        scheduler_state: 'CommunityIdentifier'
      }
    },
    TrustedGetter: {
      _enum: {
        balance: '(AccountId, CommunityIdentifier)',
        participant_index: '(AccountId, CommunityIdentifier)',
        meetup_index: '(AccountId, CommunityIdentifier)',
        attestations: '(AccountId, CommunityIdentifier)',
        meetup_registry: '(AccountId, CommunityIdentifier)'
      }
    },
    TrustedGetterSigned: {
      getter: 'TrustedGetter',
      signature: 'Signature'
    },
    Getter: {
      _enum: {
        public: 'PublicGetter',
        trusted: 'TrustedGetterSigned'
      }
    },
    ClientRequest: {
      _enum: {
        PubKeyWorker: null,
        MuRaPortWorker: null,
        StfState: '(Getter, ShardIdentifier)'
      }
    },
    WorkerEncoded: 'Vec<u8>',
    Request: {
      shard: 'ShardIdentifier',
      cyphertext: 'WorkerEncoded'
    }
  }
}
