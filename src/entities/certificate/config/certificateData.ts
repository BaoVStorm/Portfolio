import { certImages } from '@/shared/assets/images/cerificate';

export type CertificateData = {
  title: string;
  image: string;
  flex: string;
};

export const listCers: CertificateData[] = [
  {
    title: 'TalentGetGo Certificate',
    image: certImages.talentGetGo,
    flex: '700px',
  },
  {
    title: 'TalentGetGo - 3rd Prize',
    image: certImages.talentGetGo3rd,
    flex: '800px',
  },
  {
    title: 'Provincial IT - 2nd Prize (11th Grade)',
    image: certImages.hsg11Tinh2,
    flex: '720px',
  },
  {
    title: 'Provincial IT - 3rd Prize (12th Grade)',
    image: certImages.hsg12Tinh3,
    flex: '700px',
  },
  {
    title: 'School IT - 3rd Prize (12th Grade)',
    image: certImages.hsg12Trg3,
    flex: '700px',
  },
  {
    title: 'School IT - 3rd Prize (11th Grade)',
    image: certImages.hsg11Trg3,
    flex: '700px',
  },
  {
    title: 'Provincial IT - Consolation (12th Grade)',
    image: certImages.hsg12TinhKk,
    flex: '700px',
  },
  {
    title: 'School IT - Consolation (11th Grade)',
    image: certImages.hsg11TrgKk,
    flex: '770px',
  },
  {
    title: 'ITR Completion Certificate',
    image: certImages.itr,
    flex: '700px',
  },
  {
    title: 'UIT Code Contest',
    image: certImages.uitCodeContest,
    flex: '700px',
  },
  {
    title: 'VNG Code Challenge - Top 70',
    image: certImages.vngCer,
    flex: '320px',
  }
];
