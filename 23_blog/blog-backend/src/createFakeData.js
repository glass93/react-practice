import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    // https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac neque ac nisi placerat sagittis. Morbi ut lacus hendrerit, semper lacus sit amet, gravida risus. Mauris eu sem ut odio gravida facilisis. Maecenas rutrum commodo lectus at volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed cursus vestibulum rhoncus. Nam blandit, tellus id bibendum tristique, est nisl pretium urna, nec aliquet lectus purus ac orci. Donec tempor, purus quis varius dignissim, dui leo ornare mi, sollicitudin scelerisque enim leo nec nunc.

      Aliquam erat volutpat. Aenean condimentum blandit lacus gravida lacinia. Etiam tempus sem at felis rutrum imperdiet. Ut non dignissim dui, non dictum quam. Fusce eu orci sit amet elit tincidunt rutrum. Sed ex mauris, tincidunt a erat sit amet, vehicula lobortis libero. Cras venenatis enim velit, vitae molestie velit rutrum eget. Donec molestie arcu quis lorem volutpat, in pretium est tristique. Vivamus nec placerat velit. Integer a ullamcorper velit. Cras quis massa et odio imperdiet porta vitae vitae orci.
      
      Cras eget leo eget nunc tristique sodales ut in enim. Praesent vehicula fermentum odio, a auctor tortor cursus non. Maecenas dapibus purus mollis ex semper, vel aliquam nisi aliquet. Pellentesque velit orci, accumsan in ullamcorper finibus, rutrum eget dui. Integer et leo pharetra, viverra lectus nec, mattis eros. In eu semper lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce non ligula id sem lacinia elementum.
      
      Vestibulum ut bibendum magna, vel interdum nibh. Donec placerat vitae enim semper ullamcorper. Morbi a eros tincidunt, congue risus sed, semper orci. Maecenas vitae tortor a nibh laoreet eleifend. Nullam lacinia odio nec felis mattis, ac accumsan sapien semper. Integer vel pretium nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus non erat blandit vestibulum.
      
      Cras non ornare nisi. Morbi sit amet risus non massa porta faucibus. Vestibulum eget rutrum massa. Integer dapibus, diam at pharetra condimentum, massa purus lacinia mi, a maximus dolor augue sed neque. Nulla sagittis mauris sit amet ex elementum, eu fermentum tortor rhoncus. Sed tempor ligula erat, sit amet tincidunt enim molestie sed. Donec volutpat tortor id malesuada ultricies. Aliquam neque urna, gravida eu turpis ac, bibendum sagittis magna. Maecenas in risus at libero viverra sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eu tempus dolor, at hendrerit nunc. Pellentesque quis lectus nunc. Morbi erat lorem, volutpat at lectus in, imperdiet.`,
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
