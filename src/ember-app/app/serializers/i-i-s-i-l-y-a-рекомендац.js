import { Serializer as РекомендацSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-l-y-a-рекомендац';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РекомендацSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
