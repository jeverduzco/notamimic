import {User} from '../../../database';
import {findIndex} from 'lodash';

const getOrCreateUser = async (userData, provider) => {
  let user = await User.findOne({'providersData.email': userData.email});
  const providerData = {providerName: provider, ...userData};

  if (!user) {
    user = await new User({...userData, providersData: [providerData]}).save();
  } else {
    const index = findIndex(user.providersData, {providerName: provider});
    user.providersData[index != -1 ? index : user.providersData.length] = providerData;
    user.markModified('providersData');

    await user.save();
  }

  return user;
};

export {
  getOrCreateUser
}
