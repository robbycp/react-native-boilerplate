import Share, {ShareOptions} from 'react-native-share';

function shareLink(options: ShareOptions) {
  Share.open(options)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      err && console.log(err);
    });
}

export function shareMessage(message: string) {
  shareLink({title: 'share message', message});
}
