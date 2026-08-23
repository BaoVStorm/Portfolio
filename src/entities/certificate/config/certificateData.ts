import talentGetGo from '@/shared/assets/images/cerificate/talent-get-go.png';
import talentGetGo3rd from '@/shared/assets/images/cerificate/talent-get-go-3rd.png';
import hsg11Tinh2 from '@/shared/assets/images/cerificate/hsg_11_tinh_2.png';
import hsg12Tinh3 from '@/shared/assets/images/cerificate/hsg_12_tinh_3.png';
import hsg12Trg3 from '@/shared/assets/images/cerificate/hsg_12_trg_3.png';
import hsg11Trg3 from '@/shared/assets/images/cerificate/hsg_11_trg_3.png';
import hsg12TinhKk from '@/shared/assets/images/cerificate/hsg_12_tinh_kk.png';
import hsg11TrgKk from '@/shared/assets/images/cerificate/hsg_11_trg_kk.png';
import itr from '@/shared/assets/images/cerificate/itr.png';
import uitCodeContest from '@/shared/assets/images/cerificate/uit_code_contest.png';
import vngCer from '@/shared/assets/images/cerificate/vng-cer.jpg';

export type CertificateData = {
  title: string;
  image: string;
  flex: string;
};

export const listCers: CertificateData[] = [
  {
    title: 'TalentGetGo Certificate',
    image: talentGetGo,
    flex: '700px',
  },
  {
    title: 'TalentGetGo - 3rd Prize',
    image: talentGetGo3rd,
    flex: '800px',
  },
  {
    title: 'Provincial IT - 2nd Prize (11th Grade)',
    image: hsg11Tinh2,
    flex: '720px',
  },
  {
    title: 'Provincial IT - 3rd Prize (12th Grade)',
    image: hsg12Tinh3,
    flex: '700px',
  },
  {
    title: 'School IT - 3rd Prize (12th Grade)',
    image: hsg12Trg3,
    flex: '700px',
  },
  {
    title: 'School IT - 3rd Prize (11th Grade)',
    image: hsg11Trg3,
    flex: '700px',
  },
  {
    title: 'Provincial IT - Consolation (12th Grade)',
    image: hsg12TinhKk,
    flex: '700px',
  },
  {
    title: 'School IT - Consolation (11th Grade)',
    image: hsg11TrgKk,
    flex: '770px',
  },
  {
    title: 'ITR Completion Certificate',
    image: itr,
    flex: '700px',
  },
  {
    title: 'UIT Code Contest',
    image: uitCodeContest,
    flex: '700px',
  },
  {
    title: 'VNG Code Challenge - Top 70',
    image: vngCer,
    flex: '320px',
  }
];
