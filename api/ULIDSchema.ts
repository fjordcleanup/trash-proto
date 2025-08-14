import type { ULID } from '@coderbyheart/aws-dynamodb-es-cqrs/event/AggregateEvent'
import { Type, type TRegExp, type TTransform } from '@sinclair/typebox'

/**
 * Converts a string to an ULID
 */
export const ULIDSchema: TTransform<TRegExp, ULID> = Type.Transform(
	Type.RegExp(`^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$`, {
		title: 'ULID',
		description:
			'A Universally Unique Lexicographically Sortable Identifier (ULID)',
		examples: ['01K1KZYXZ71X6HTKCWDWH7TJXF'],
	}),
)
	.Decode((value) => value as ULID)
	.Encode((value) => value)
