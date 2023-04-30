export interface IAsset {
  // NOTE: some unused keys are omitted
  id: number;
  token_id: string;
  num_sales: number;
  image_url: Nullable<string>;
  image_original_url: Nullable<string>;
  image_preview_url: Nullable<string>;
  image_thumbnail_url: Nullable<string>;
  animation_original_url: string;
  name: string;
  description: Nullable<string>;
  external_link: string;
  asset_contract: {
    address: string;
    asset_contract_type: string;
    chain_identifier: string;
    created_date: string;
    name: string;
    nft_version: string;
    opensea_version: null;
    owner: number;
    schema_name: string;
    symbol: string;
    total_supply: string;
    description: string;
    external_link: Nullable<string>;
    image_url: string;
    default_to_fiat: boolean;
    dev_buyer_fee_basis_points: number;
    dev_seller_fee_basis_points: number;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: number;
    opensea_seller_fee_basis_points: number;
    buyer_fee_basis_points: number;
    seller_fee_basis_points: number;
    payout_address: string;
  };
  permalink: string;
  collection: {
    banner_image_url: Nullable<string>;
    chat_url: Nullable<string>;
    created_date: string;
    default_to_fiat: boolean;
    description: string;
    dev_buyer_fee_basis_points: string;
    dev_seller_fee_basis_points: string;
    discord_url: Nullable<string>;
    display_data: {
      card_display_style: string;
      images: Nullable<string>;
    };
    external_url: Nullable<string>;
    featured: boolean;
    featured_image_url: Nullable<string>;
    hidden: boolean;
    name: string;
    safelist_request_status: string;
    image_url: string;
    is_subject_to_whitelist: boolean;
  };
  token_metadata: string;
  creator: {
    user: {
      username: string;
    };
    address: string;
    config: string;
    profile_img_url: string;
  };
  traits: {
    trait_type: string;
    display_type: null;
    max_value: null;
    trait_count: number;
    order: null;
    value: string;
  }[];
}

export interface IApiAssets {
  assets: IAsset[];
  next: Nullable<string>;
  previous: Nullable<string>;
}

export interface IApiAssetDetail extends IAsset {}
