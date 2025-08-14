import type { AggregateVersion } from '@coderbyheart/aws-dynamodb-es-cqrs/aggregate/AggregateVersion'
import { Type, type TInteger, type TTransform } from '@sinclair/typebox'

export const AggregateVersionSchema: TTransform<TInteger, AggregateVersion> =
	Type.Transform(
		Type.Integer({
			minimum: 1,
			title: 'AggregateVersion',
			description: 'The version of an aggregate.',
			examples: [1, 2, 42],
		}),
	)
		.Decode((value) => value as AggregateVersion)
		.Encode((value) => value)
