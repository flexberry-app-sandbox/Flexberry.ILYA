import { Serializer as СпециалистSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-l-y-a-специалист';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпециалистSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
