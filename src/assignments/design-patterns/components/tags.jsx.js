import React from 'react'

const Tag = ({tag, tagStyle}) =>
	<span className={tagStyle}>{tag}</span>

export const TagDefault = ({tag, tagStyle}) =>
	<Tag tag={tag} tagStyle="tag"></Tag>

TagDefault.displayName = 'TagDefault'

export const TagFeatured = ({tag, tagStyle}) =>
	<Tag tag={tag} tagStyle="tag featured"></Tag>

TagFeatured.displayName = 'TagFeatured'

export const TagNew = ({tag, tagStyle}) =>
	<Tag tag={tag} tagStyle="tag new"></Tag>

TagNew.displayName = 'TagNew'
