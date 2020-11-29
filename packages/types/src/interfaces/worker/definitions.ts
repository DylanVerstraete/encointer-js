export default {
  rpc: {},
  types: {
    ShardIdentifier: 'Hash',
    Enclave: {
      pubkey: 'AccountId',
      mrenclave: 'Hash',
      timestamp: 'u64',
      url: 'Text'
    },
    PublicGetter: {
      _enum: {
        total_issuance: 'CurrencyIdentifier',
        participant_count: 'CurrencyIdentifier',
        meetup_count: 'CurrencyIdentifier',
        ceremony_reward: 'CurrencyIdentifier',
        location_tolerance: 'CurrencyIdentifier',
        time_tolerance: 'CurrencyIdentifier'
      }
    },
    TrustedGetter: {
      _enum: {
        balance: '(AccountId, CurrencyIdentifier)',
        registration: '(AccountId, CurrencyIdentifier)',
        meetup_index_and_location: '(AccountId, CurrencyIdentifier)',
        attestations: '(AccountId, CurrencyIdentifier)'
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
    Request: {
      shard: 'ShardIdentifier',
      cyphertext: 'Vec<u8>'
    }
  }
}
