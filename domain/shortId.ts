import type { AggregateMeta } from '@coderbyheart/aws-dynamodb-es-cqrs/aggregate'

export const shortId = ({
	$meta,
}: {
	$meta: Pick<AggregateMeta, 'id'>
}): string => $meta.id.slice(-6)
