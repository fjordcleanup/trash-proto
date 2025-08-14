import type { AggregateMeta } from '@coderbyheart/aws-dynamodb-es-cqrs/aggregate/AggregateMeta'

export const shortId = ({
	$meta,
}: {
	$meta: Pick<AggregateMeta, 'id'>
}): string => $meta.id.slice(-6)
